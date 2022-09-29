import { useState, useEffect } from "react";
import {
  TextInput,
  Alert,
  Box,
  Button,
  Table,
  Tabs,
  TypographyStylesProvider,
  Text,
  MultiSelect,
} from "@mantine/core";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  IconHelp,
  IconPencil,
  IconTrash,
  IconMessage,
  IconEyeOff,
  IconCreditCard,
  IconCirclePlus,
  IconAlertCircle,
  IconNotes,
} from "@tabler/icons";
import { stringify as uuidStringify } from "uuid";
import ModalComponent from "@/components/tailwindui/Modal";

interface FormValues {
  name: string;
  code?: string;
  workers: string[];
  domains: string[];
}

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  workers: yup.array().of(yup.string()).required(),
  domains: yup.array().of(yup.string()).required("Required"),
});

const a11yProps = (index: string) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Collabration = () => {
  const [value, setValue] = useState("0");
  const [pvtWorkSpace, setPvtWorkSpace] = useState<any[]>([]);
  const [totalWorkspace, setTotalWorkspace] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [openChildModal, setOpenChildModal] = useState(false);
  const [workers, setWorkers] = useState([]);
  const [domains, setDomains] = useState([]);
  const [editableData, setEditableData] = useState<FormValues | null>(null);

  const methods = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      domains: [],
    },
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue: setFormData,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (editableData) {
      setFormData("name", editableData?.name ?? "", {
        shouldDirty: true,
        shouldTouch: true,
      });
      setFormData("domains", editableData?.domains ?? [], {
        shouldDirty: true,
        shouldTouch: true,
      });
      setFormData("workers", editableData?.workers ?? [], {
        shouldDirty: true,
        shouldTouch: true,
      });
    }
  }, [editableData, setFormData]);

  const resetForm = () => {
    reset({
      code: "",
      name: "",
      domains: [],
      workers: [],
    });
    setEditableData(null);
  };

  const handleOpen = () => {
    setOpen(true), setOpenChildModal(false);
  };
  const handleClose = () => {
    resetForm();
    setOpen(false);
    setOpenChildModal(false);
  };

  const handleEdit = (item: FormValues) => {
    setEditableData(item);
    handleOpen();
  };

  const handleDelete = (item: FormValues) => {
    const index = pvtWorkSpace?.findIndex((a) => a.code === item.code);
    console.log(index);

    if (index > -1) {
      setPvtWorkSpace((current) => [...current, pvtWorkSpace.splice(index, 1)]);
    }
  };

  const onSubmit = (data: FormValues) => {
    if (editableData) {
      let updateData = pvtWorkSpace?.find((a) => a.code === editableData?.code);
      updateData.name = data?.name ?? "";
      updateData.domains = data?.domains ?? [];
      updateData.workers = data?.workers ?? [];
      setPvtWorkSpace((current) => [...current, updateData]);
    } else {
      const uuidBytes = [
        0x6e, 0xc0, 0xbd, 0x7f, 0x11, 0xc0, 0x43, 0xda, 0x97, 0x5e, 0x2a, 0x8a,
        0xd9, 0xeb, 0xae, 0x0b,
      ];
      const uuid = uuidStringify(uuidBytes);
      data.code = uuid;
      setPvtWorkSpace((current) => [...current, data]);
    }
    resetForm();
    handleClose();
  };

  return (
    <>
      <Box className="bg-[rgb(242, 243, 247)] pl-6 pt-6">
        <Box className="flex items-center">
          <h1 className="text-xl font-bold">Collaboration tools</h1>
          <IconMessage className="text-40 text-fuchsia-600 font-extrabold w-5 h-5 ml-4 mt-1 invert-0" />
          <h6 className="text-blue-500  text-sm  mt-1"> Give feedback</h6>
        </Box>
        <Box className="mt-4" sx={{ width: "100%" }}>
          <Tabs defaultValue={value} onTabChange={setValue}>
            <Tabs.List>
              <Tabs.Tab
                value="0"
                className={
                  value === "0"
                    ? "font-semibold truncate text-slate-400 bg-white border border-solid border-[#c2cded] border-r-0 border-b-0"
                    : "font-semibold truncate text-slate-400 bg-gray border border-solid border-[#c2cded] border-r-0"
                }
                {...a11yProps("0")}
              >
                Workspace(2)
              </Tabs.Tab>
              <Tabs.Tab
                value={"1"}
                className={
                  value === "1"
                    ? "font-semibold truncate text-slate-400 bg-white border border-solid border-[#c2cded] border-r-0 border-b-0"
                    : "font-semibold truncate text-slate-400 bg-gray border border-solid border-[#c2cded] border-r-0"
                }
                {...a11yProps("1")}
              >
                MULTI-USER(7)
              </Tabs.Tab>
              <Tabs.Tab
                value={"2"}
                className={
                  value === "2"
                    ? "font-semibold truncate text-slate-400 bg-white border border-solid border-[#c2cded] border-r-0 border-b-0"
                    : "font-semibold truncate text-slate-400 bg-gray border border-solid border-[#c2cded] border-r-0"
                }
                {...a11yProps("1")}
              >
                SHARED REPORTS
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="0">
              <Box>
                <Box className="flex flex-wrap align-middle justify-between">
                  <Box className="flex items-center justify-center font-bold">
                    <Box>AVAILABLE PRIVATE WORK SPACES: {pvtWorkSpace?.length ?? 0} of {totalWorkspace}</Box>
                  </Box>
                  <Box className="flex w-full lg:w-6/12 items-center justify-end">
                    <Button.Group>
                      <Button
                        leftIcon={<IconEyeOff color="rgb(213, 0, 159)" />}
                        variant="white"
                        className="text-state-500"
                      >
                        Watch Video
                      </Button>
                      <Button
                        leftIcon={<IconCreditCard color="rgb(213, 0, 159)" />}
                        variant="white"
                        className="text-state-500"
                      >
                        Learn More
                      </Button>
                      <Button
                        leftIcon={<IconCirclePlus />}
                        variant="white"
                        className="bg-[rgb(0,193,97)] text-white"
                        onClick={handleOpen}
                      >
                        Add private workspace
                      </Button>
                    </Button.Group>
                  </Box>
                </Box>
                <Box>
                  <Alert
                    icon={<IconAlertCircle size={16} />}
                    className="bg-[rgb(246,247,249)] border border-l-5 border-t-0 border-b-0 border-r-0 border-solid divide-slate-300"
                  >
                    By default, there is always one Public Workspace that can be
                    managed by an Account Owner and all Admins. If you want to
                    keep campaigns and its elements seperated, add Private
                    Workspace.
                  </Alert>
                  <Table
                    className="table-auto"
                    aria-label="sticky table"
                    striped
                    highlightOnHover
                  >
                    <thead className="bg-gray-500">
                      <tr>
                        <th>
                          <Box className="text-white">
                            Private workspace name
                          </Box>
                        </th>
                        <th>
                          <Box className="text-white">Workspace id</Box>
                        </th>
                        <th>
                          <Box className="flex items-center gap-3">
                            <span className="text-white">Assigned Workers</span>
                            <IconHelp className="text-gray-200" size={16} />
                          </Box>
                        </th>
                        <th>
                          <Box className="flex items-center gap-3">
                            <span className="text-white">Assigned Domains</span>
                            <IconHelp className="text-gray-200" size={16} />
                          </Box>
                        </th>
                        <th>
                          <Box className="text-white">Actions</Box>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {pvtWorkSpace?.map((row: any, index: number) => (
                        <tr key={row.code}>
                          <td scope="row">{row.name}</td>
                          <td>{row.code}</td>
                          <td align="left">
                            <Box className="flex gap-5">
                              {row.workers?.map((cur: any, index: number) => (
                                <Box key={index}>
                                  <span className="text-slate-400 border border-slate-400 items-center flex px-1 mx-1">
                                    {cur}
                                  </span>
                                </Box>
                              )) ?? "-"}
                            </Box>
                          </td>
                          <td align="left">
                            <Box className="flex gap-5">
                              {row.domain?.map((cur: any, index) => (
                                <Box key={index}>
                                  <span className="text-slate-400 border border-slate-400 items-center flex px-1 mx-1">
                                    {cur}
                                  </span>
                                </Box>
                              )) ?? "-"}
                            </Box>
                          </td>
                          <td align="left">
                            <>
                              <Button onClick={() => handleEdit(row)}>
                                <IconPencil className="text-blue-900" />
                              </Button>
                              <Button onClick={() => handleDelete(row)}>
                                <IconTrash className="text-blue-900" />
                              </Button>
                            </>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Box>
              </Box>
            </Tabs.Panel>
            <Tabs.Panel value="1">
              <Box>Item Two</Box>
            </Tabs.Panel>
            <Tabs.Panel value="2">
              <Box>Item Three</Box>
            </Tabs.Panel>
          </Tabs>
          <ModalComponent
            title={
              !editableData ? "Add private Workspace" : "Edit private Workspace"
            }
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="p-1 border"
            open={open}
            onClose={handleClose}
            actions={[
              {
                label: "Cancel",
                onClick: () => setOpenChildModal(true),
                variant: "secondary",
              },
              {
                label: "Save",
                onClick: handleSubmit(onSubmit),
                variant: "primary",
              },
            ]}
          >
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
                <Box className="mb-2">
                  <TextInput
                    label={
                      <TypographyStylesProvider
                        id="modal-modal-description"
                        sx={{ mt: 2, fontWeight: "bold" }}
                      >
                        Private Workspace Name
                      </TypographyStylesProvider>
                    }
                    placeholder="Private Workspace Name"
                    rightSection={<IconNotes />}
                    {...register("name")}
                  />
                  {errors?.name && (
                    <Text color="red">{errors?.name?.message}</Text>
                  )}
                </Box>
                <Box className="mb-2">
                  <Controller
                    control={control}
                    name="workers"
                    render={({ field: { onChange, value } }) => {
                      return (
                        <>
                          <MultiSelect
                            value={value}
                            data={workers}
                            label={
                              <Box className="flex items-center gap-2">
                                <TypographyStylesProvider
                                  id="modal-modal-description"
                                  sx={{ mt: 2, fontWeight: "bold" }}
                                >
                                  Assigned Workers
                                </TypographyStylesProvider>
                                <IconAlertCircle size={16} />
                              </Box>
                            }
                            placeholder="Assigned Workers"
                            searchable
                            creatable
                            getCreateLabel={(query) => `+ Create ${query}`}
                            nothingFound="Nothing found"
                            onChange={(value) => {
                              onChange(value);
                            }}
                            onCreate={(query) => {
                              const item = { value: query, label: query };
                              setWorkers((current) => [...current, item]);
                              return item;
                            }}
                          />
                          {errors?.workers && (
                            <Text color="red">{errors?.workers?.message}</Text>
                          )}
                        </>
                      );
                    }}
                  />
                </Box>

                <Box className="mb-2">
                  <Controller
                    control={control}
                    name="domains"
                    render={({ field: { onChange, value } }) => (
                      <>
                        <MultiSelect
                          value={value}
                          data={domains}
                          label={
                            <Box className="flex items-center gap-2">
                              <TypographyStylesProvider
                                id="modal-modal-description"
                                sx={{ mt: 2, fontWeight: "bold" }}
                              >
                                Assign domains
                              </TypographyStylesProvider>
                              <IconAlertCircle size={16} />
                            </Box>
                          }
                          placeholder="Assigned Domains"
                          searchable
                          creatable
                          getCreateLabel={(query) => `+ Create ${query}`}
                          nothingFound="Nothing found"
                          onChange={(value) => {
                            onChange(value);
                          }}
                          onCreate={(query) => {
                            const item = { value: query, label: query };
                            setDomains((current) => [...current, item]);
                            return item;
                          }}
                        />
                        {errors?.domains && (
                          <Text color="red">{errors?.domains?.message}</Text>
                        )}
                      </>
                    )}
                  />
                </Box>
              </form>
            </FormProvider>
          </ModalComponent>
          <ModalComponent
            title="Close a Workspace`s from without saving?"
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="backdrop-blur-lg p-1 border"
            open={openChildModal}
            onClose={handleClose}
            size="lg"
            actions={[
              {
                label: "Go back",
                onClick: () => setOpenChildModal(false),
                variant: "secondary",
              },
              {
                label: "Yes close form",
                onClick: handleClose,
                variant: "primary",
              },
            ]}
          >
            <p>
              {/* eslint-disable-next-line react/no-unescaped-entities*/}
              You have entered changes to the workspace's form. if you close the
              form now, you will loose all input.
            </p>
            <hr className="mt-5 mb-2" />
          </ModalComponent>
        </Box>
      </Box>
    </>
  );
};

export default Collabration;
