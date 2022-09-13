import React, { useState, useEffect, useCallback } from "react";
import NavigationDashboard from "@app/components/tailwindui/NavigationDashboard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography, Button, Alert, Input, Collapse } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
// eslint-disable-next-line no-unused-vars
import TablePagination from "@mui/material/TablePagination";
import EditIcon from "@mui/icons-material/Edit";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import HelpIcon from "@mui/icons-material/Help";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import CommentIcon from "@mui/icons-material/Comment";
import TagsInput from "@app/components/tailwindui/TagsInput";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import HighlightAltIcon from "@mui/icons-material/HighlightAlt";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import EventNoteIcon from "@mui/icons-material/EventNote";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupIcon from "@mui/icons-material/Group";
import ModalComponent from "@app/components/tailwindui/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Column {
  id: "name" | "code" | "workers" | "domains" | "size";
  label: any;
  minWidth?: number;
  align?: "right";
  // eslint-disable-next-line no-unused-vars
  format?: (value: number) => any;
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface Data {
  name: string;
  code: string;
  workers: any;
  domains: any;
  size?: number;
}
function createData(
  name: string,
  code: string,
  workers: any,
  domains: any,
  size?: number
): Data {
  return { name, code, workers, domains, size };
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      // hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function WorkspaceManagement(session: any) {
  const initUser = { workSpaceName: "", assignWorkers: "", assignDomains: "" };
  const [flag, setFlag] = useState("Add");
  const [open, setOpen] = useState(false);
  const [openChildModal, setOpenChildModal] = useState(false);
  const [value, setValue] = useState(0);
  const [workSpaceFormValue, setWorkSpaceFormValue] = useState("");
  const [collapse, setCollapse] = useState(false);
  const [tags, setTags] = useState([]);
  const [domains, setDomains] = useState([]);
  const [pvtWorkSpace, setPvtWorkSpace] = useState<any[]>([]);
  const [inputWorkerValue, setInputWorkerValue] = React.useState("");
  const [selectedWorkerItem, setSelectedWorkerItem] = React.useState([]);
  const [inputDomainValue, setInputDomainValue] = React.useState("");
  const [selectedDomainItem, setSelectedDomainItem] = React.useState([]);

  function handleWorkerChange(item) {
    let newSelectedItem: any = [...selectedWorkerItem];
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item];
    }
    setInputWorkerValue("");
    setSelectedWorkerItem(newSelectedItem);
  }
  function handleInputWorkderChange(event) {
    setInputWorkerValue(event.target.value);
  }
  function handleInputDomainChange(event) {
    setInputDomainValue(event.target.value);
  }

  function handleWorkerKeyDown(event: any) {
    if (event.key === "Enter") {
      const newSelectedItem: any = [...selectedWorkerItem];
      const duplicatedValues = newSelectedItem.indexOf(
        event.target.value.trim()
      );

      if (duplicatedValues !== -1) {
        setInputWorkerValue("");
        return;
      }
      if (!event.target.value.replace(/\s/g, "").length) return;

      newSelectedItem.push(event.target.value.trim());
      setSelectedWorkerItem(newSelectedItem);
      setTags(newSelectedItem);
      setInputWorkerValue("");
    }
    if (
      selectedWorkerItem.length &&
      !inputWorkerValue.length &&
      event.key === "Backspace"
    ) {
      setSelectedWorkerItem(
        selectedWorkerItem.slice(0, selectedWorkerItem.length - 1)
      );
    }
  }
  function handleDomainKeyDown(event: any) {
    if (event.key === "Enter") {
      const newSelectedItem: any = [...selectedDomainItem];
      const duplicatedValues = newSelectedItem.indexOf(
        event.target.value.trim()
      );

      if (duplicatedValues !== -1) {
        setInputDomainValue("");
        return;
      }
      if (!event.target.value.replace(/\s/g, "").length) return;

      newSelectedItem.push(event.target.value.trim());
      setSelectedDomainItem(newSelectedItem);
      setDomains(newSelectedItem);
      setInputDomainValue("");
    }
    if (
      selectedDomainItem.length &&
      !inputDomainValue.length &&
      event.key === "Backspace"
    ) {
      setSelectedDomainItem(
        selectedDomainItem.slice(0, selectedDomainItem.length - 1)
      );
    }
  }

  const handleWorkerDelete = (item) => () => {
    const newSelectedItem: any = [...selectedWorkerItem];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setSelectedWorkerItem(newSelectedItem);
    setTags(newSelectedItem);
  };

  const handleDomainDelete = (item) => () => {
    const newSelectedItem: any = [...selectedDomainItem];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setSelectedDomainItem(newSelectedItem);
    setDomains(newSelectedItem);
  };

  function handleDomainChange(item) {
    let newSelectedItem: any = [...selectedDomainItem];
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item];
    }
    setInputDomainValue("");
    setSelectedDomainItem(newSelectedItem);
  }
  const handleOpen = () => {
    setOpen(true), setOpenChildModal(false);
  };
  const handleClose = () => {
    setOpen(false), setOpenChildModal(false);
  };

  const settingGeneralMenu = [
    {
      icon: <AppSettingsAltIcon />,
      name: "General Settings",
    },
    {
      icon: <PersonIcon />,
      name: "Profile",
    },
    {
      icon: <LockIcon />,
      name: "Security",
    },
    {
      icon: <SportsBaseballIcon />,
      name: "Domains",
    },
    {
      icon: <HighlightAltIcon />,
      name: "Tracking URLs",
    },
    {
      icon: <CurrencyExchangeIcon />,
      name: "Conversion upload",
    },
    {
      icon: <BubbleChartIcon />,
      name: "Redirect Webhook",
    },
    {
      icon: <GroupIcon />,
      name: "Collabration tools",
    },
  ];
  const settingsMenu = [
    {
      icon: <ScatterPlotIcon />,
      name: "Integrations",
    },
    {
      icon: <EventNoteIcon />,
      name: "Event log",
    },
    {
      icon: <MonetizationOnIcon />,
      name: "Custom conversions",
    },
    {
      icon: <SmartToyIcon />,
      name: "IP/UA filtering",
    },
    {
      icon: <MedicalServicesIcon />,
      name: "Anti-fraud kit",
    },
    {
      icon: <HourglassBottomIcon />,
      name: "MTTC",
    },
    {
      icon: <NotificationsIcon />,
      name: "Notifications",
    },
  ];

  const actionformater = () => {
    return (
      <>
        <button
          onClick={() => {
            setFlag("Edit");
            handleOpen();
          }}
        >
          <EditIcon className="text-blue-900" />
        </button>
        <button>
          <DeleteIcon className="text-blue-900" />
        </button>
      </>
    );
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setWorkSpaceFormValue(value);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = React.useState(0);
  // eslint-disable-next-line no-unused-vars
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const columns: readonly Column[] = [
    { id: "name", label: "Private workspace name", minWidth: 170 },
    { id: "code", label: "Workspace id", minWidth: 100 },
    {
      id: "workers",
      label: (
        <div style={{ display: "flex", alignItems: "flex-end", gap: "3px" }}>
          <span>Assigned Workers</span>
          <HelpIcon color="disabled" />
        </div>
      ),
      minWidth: 170,
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "domains",
      label: (
        <div style={{ display: "flex", alignItems: "flex-end", gap: "3px" }}>
          <span>Assigned Domains</span>
          <HelpIcon color="disabled" />
        </div>
      ),
      minWidth: 170,
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "size",
      label: "Actions",
      format: actionformater,
    },
  ];
  const [color, setColor] = useState("");
  const menuCollapse = (e?: any) => {
    if (color === e) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  };
  const [rowId, setrowId] = useState(0);

  const handleDelete = (item) => () => {
    const newSelectedItem: any = [...pvtWorkSpace];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setPvtWorkSpace(newSelectedItem);
  };
  const [submitFlag, setSubmitFlag] = useState("add");

  const editHandler = (row) => {
    setSubmitFlag("edit");
    setrowId(row);
    const editData: any = pvtWorkSpace.find((cur: any) => cur?.code == row);
    setWorkSpaceFormValue(editData.name);
    setTags(editData.workers);
    setSelectedWorkerItem(editData.workers);
    setSelectedDomainItem(editData.domains);
    setDomains(editData.domains);
  };
  useEffect(() => {
    menuCollapse();
  }, [color, setColor]);
  const addPrivateWorkSpaceHandler = () => {
    const id = Math.floor(Math.random() * 1000000000);
    const data = {
      code: id,
      name: workSpaceFormValue,
      workers: tags,
      domains,
    };
    if (submitFlag == "add") {
      setPvtWorkSpace((prev: any) => [...prev, data]);
    } else {
      pvtWorkSpace.splice(
        pvtWorkSpace.findIndex((x: any) => x.code === rowId),
        1,
        data
      );
      setPvtWorkSpace(pvtWorkSpace);
    }
    handleClose();
    setTags([]);
    setDomains([]);
    setWorkSpaceFormValue("");
    setInputDomainValue("");
    setSelectedDomainItem([]);
    setInputWorkerValue("");
    setSelectedWorkerItem([]);
  };

  return (
    <>
      {/* eslint-disable-next-line react/no-children-prop */}
      <NavigationDashboard session={session}>
        <div className="bg-white flex items-center flex-col md:flex-row sm: flex-wrap lg:flex-nowrap">
          <Box className="flex-wrap flex items-start gap-5 py-5 px-7 flex-col md:flex-row">
            {settingGeneralMenu.map((item) => {
              return (
                <>
                  <Button
                    variant="text"
                    className={
                      " sm:text-xs mb-1 ml-1 text-sm hover:text-white hover:bg-blue-600 text-blue-500 transform-none normal-case" +
                      (color === item.name ? " text-white bg-blue-600 " : "")
                    }
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pr: "20px",
                      cursor: "pointer",
                      gap: "3px",
                    }}
                    onClick={() => {
                      setColor(item.name);
                    }}
                  >
                    {item.icon}
                    {item.name}
                  </Button>
                </>
              );
            })}
          </Box>
        </div>
        <hr />
        <div className="bg-white flex justify-center md:justify-start">
          <Box className="flex-wrap flex items-start  gap-5 py-5 px-7 flex-col md:flex-row">
            {settingsMenu.map((item) => {
              return (
                <>
                  <Button
                    variant="text"
                    className={
                      " sm:text-xs mb-1 ml-1 text-sm hover:text-white hover:bg-blue-600  text-blue-500 transform-none normal-case" +
                      (color === item.name ? " text-white bg-blue-600 " : "")
                    }
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pr: "20px",
                      cursor: "pointer",
                      gap: "3px",
                    }}
                    onClick={() => {
                      setCollapse(!collapse);
                      setColor(item.name);
                    }}
                  >
                    {item.icon}
                    {item.name}
                  </Button>
                </>
              );
            })}
          </Box>
        </div>
        <hr />
        <Collapse in={color === "Collabration tools"}>
          <Box
            sx={{
              backgroundColor: "rgb(242, 243, 247)",
              pl: "25px",
              pt: "25px",
            }}
          >
            <Box className="flex">
              <h1 className="text-xl font-bold">Collaboration tools</h1>
              <CommentIcon className=" text-40 text-fuchsia-600 font-extrabold w-5 h-5 ml-4 mt-1" />
              <h6 className="text-blue-500  text-sm  mt-1"> Give feedback</h6>
            </Box>
            <Box className="mt-4" sx={{ width: "100%" }}>
              <Tabs
                TabIndicatorProps={{
                  style: { background: "inherit", color: "red" },
                }}
                className="text-blue-500"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example border border-b-1"
              >
                <Tab
                  className={
                    value === 0
                      ? "font-semibold truncate text-slate-400 bg-white border border-solid border-[#c2cded] border-r-0 border-b-0"
                      : "font-semibold truncate text-slate-400 bg-gray border border-solid border-[#c2cded] border-r-0"
                  }
                  // sx={{
                  //   // border: "1px solid rgb(196, 204, 224)",
                  //   // borderRight: "none",
                  //   // borderBottom:
                  //     // value === 0 ? "none" : "1px solid rgb(196, 204, 224)",
                  // }}
                  label="Workspace(2)"
                  {...a11yProps(0)}
                />
                <Tab
                  className={
                    value === 1
                      ? "font-semibold truncate text-slate-400 bg-white border border-solid border-[#c2cded] border-r-0 border-b-0"
                      : "font-semibold truncate text-slate-400 bg-gray border border-solid border-[#c2cded] border-r-0"
                  }
                  sx={{
                    // border: "1px solid rgb(196, 204, 224)",
                    borderRight: "none",
                    // borderBottom:
                    //   value === 1 ? "none" : "1px solid rgb(196, 204, 224)",
                  }}
                  label="MULTI-USER(7)"
                  {...a11yProps(1)}
                />
                {console.log(value === 2, "value === 2")}
                <Tab
                  className={
                    value === 2
                      ? "font-semibold truncate text-slate-400 bg-white border border-solid border-[#c2cded] border-b-0"
                      : "font-semibold truncate text-slate-400 bg-gray border border-solid border-[#c2cded]"
                  }
                  sx={
                    {
                      // border: "1px solid rgb(196, 204, 224)",
                      // borderBottom:
                      //   value === 2 ? "none" : "1px solid rgb(196, 204, 224)",
                    }
                  }
                  label="SHARED REPORTS"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
          </Box>
          <TabPanel value={value} index={0}>
            <Box>
              <Box
                display={"flex"}
                flexWrap="wrap"
                justifyContent="space-between"
                alignItems={"center"}
              >
                <p className="font-bold">
                  AVAILABLE PRIVATE WORK SPACES: 48 of 50
                </p>
                <Box
                  display={"flex"}
                  className="w-s-full"
                  flexWrap="wrap"
                  gap="15px"
                  mb={"25px"}
                >
                  <Box display={"flex"} gap="10px" alignItems="center">
                    <RemoveRedEyeIcon style={{ color: "rgb(213, 0, 159)" }} />
                    Watch Video
                  </Box>
                  <Box display={"flex"} gap="10px" alignItems="center">
                    <CreditCardIcon style={{ color: "rgb(213, 0, 159)" }} />
                    Learn More
                  </Box>
                  <Button
                    onClick={() => {
                      setFlag("Add");
                      setSubmitFlag("add");
                      handleOpen();
                    }}
                    style={{ color: "white", backgroundColor: "rgb(0,193,97)" }}
                  >
                    <AddCircleIcon />
                    Add private workspace
                  </Button>
                </Box>
              </Box>
              <Box paddingBottom={"20px"}>
                <Alert
                  severity="info"
                  style={{
                    backgroundColor: "rgb(246,247,249)",
                    borderLeft: "5px solid rgb(119, 99, 225)",
                  }}
                >
                  By default, there is always one Public Workspace that can be
                  managed by an Account Owner and all Admins. If you want to
                  keep campaigns and its elements seperated, add Private
                  Workspace.
                </Alert>
              </Box>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            className="bg-slate-500 text-white"
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {pvtWorkSpace.map((row: any) => (
                        <TableRow key={row.code}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell>{row.code}</TableCell>
                          <TableCell align="left">
                            <Box style={{ display: "flex", gap: "5px" }}>
                              {row.workers.map((cur) => (
                                <Box key={cur.code}>
                                  <span className="text-slate-400 border border-slate-400 items-center flex px-1 mx-1">
                                    {cur}
                                  </span>
                                </Box>
                              ))}
                            </Box>
                          </TableCell>
                          <TableCell align="left">
                            <Box style={{ display: "flex", gap: "5px" }}>
                              {row.domains.map((cur) => (
                                <Box key={cur.code}>
                                  <span className="text-slate-400 border border-slate-400 items-center flex px-1 mx-1">
                                    {cur}
                                  </span>
                                </Box>
                              ))}
                            </Box>
                          </TableCell>
                          <TableCell align="left">
                            <>
                              <button
                                onClick={() => {
                                  setFlag("Edit");
                                  handleOpen();
                                }}
                              >
                                <EditIcon
                                  className="text-blue-900"
                                  onClick={() => editHandler(row.code)}
                                />
                              </button>
                              <button>
                                <DeleteIcon
                                  className="text-blue-900"
                                  onClick={handleDelete(row)}
                                />
                              </button>
                            </>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    {/* <TableBody>
                      {rows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {

                          return (
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.code}
                            >
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody> */}
                    {/* ****************************************************** */}
                  </Table>
                </TableContainer>
                <ModalComponent
                  title={
                    flag === "Add"
                      ? "Add private Workspace"
                      : "Edit private Workspace"
                  }
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  className="p-1 border"
                  open={open}
                  onClose={handleClose}
                  fullWidth
                  actions={[
                    {
                      label: "Cancel",
                      onClick: () => setOpenChildModal(true),
                      variant: "secondary",
                      className: "modal-action-button bg-slate-100"
                      
                    },
                    {
                      label: "Save",
                      onClick: addPrivateWorkSpaceHandler,
                      variant: "primary",
                      className: "modal-action-button bg-[#7B67E7] text-white"
                    },
                  ]}
                >
                  <form className="border-t-2">
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2, fontWeight: "bold" }}
                    >
                      Private workspace name
                    </Typography>
                    <Input
                      id="standard-adornment-weight"
                      name="workSpaceName"
                      onChange={onInputChange}
                      value={workSpaceFormValue}
                      className="border"
                      sx={{ width: "100%" }}
                      endAdornment={<AdUnitsIcon />}
                      aria-describedby="standard-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />

                    <div className="flex items-end gap-1 mt-5 mb-1 align-center">
                      <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2, fontWeight: "bold" }}
                      >
                        Assigned Workers{" "}
                      </Typography>
                      <HelpIcon color="disabled" />
                    </div>
                    <TagsInput
                      placeholder="Assigned Worker"
                      inputValue={inputWorkerValue}
                      handleChange={handleWorkerChange}
                      handleKeyDown={handleWorkerKeyDown}
                      setInputValue={setInputWorkerValue}
                      handleDelete={handleWorkerDelete}
                      selectedItem={selectedWorkerItem}
                      handleInputChange={handleInputWorkderChange}
                      setSelectedItem={setSelectedWorkerItem}
                    />
                    <Typography
                      id="modal-modal-description"
                      sx={{ fontSize: "13px" }}
                    >
                      Account owner and all Admins are assigned to all private
                      workspace by default{" "}
                    </Typography>
                    <div className="flex items-end gap-1 mt-5 mb-1">
                      <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2, fontWeight: "bold" }}
                      >
                        Assigned Domains
                      </Typography>
                      <HelpIcon color="disabled" />
                    </div>
                    <TagsInput
                      placeholder="Assigned Domains"
                      handleChange={handleDomainChange}
                      inputValue={inputDomainValue}
                      handleKeyDown={handleDomainKeyDown}
                      handleDelete={handleDomainDelete}
                      handleInputChange={handleInputDomainChange}
                      setInputValue={setInputDomainValue}
                      selectedItem={selectedDomainItem}
                      setSelectedItem={setSelectedDomainItem}
                    />
                  </form>
                </ModalComponent>
                <ModalComponent
                  title="Close a Workspace`s from without saving?"
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  className="backdrop-blur-lg p-1 border"
                  open={openChildModal}
                  onClose={handleClose}
                  fullWidth
                  hideBackdrop
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
                    You have entered changes to the workspace's form. if you
                    close the form now, you will loose all input.
                  </p>
                  <hr className="mt-5 mb-2" />
                </ModalComponent>

                {/* <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}
              </Paper>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Collapse>
      </NavigationDashboard>
    </>
  );
}

export default WorkspaceManagement;
