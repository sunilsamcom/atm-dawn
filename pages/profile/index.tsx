import React, { useCallback, useState, useEffect } from "react";
import Head from "next/head";
import { Button, Tooltip, TextInput, Box, Title } from "@mantine/core";
import {
  BellIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PencilAltIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import NavBar from "@/components/organisam/NavBar";
import UserIcon from "../../assets/user.png";
import Image from "next/image";

const navigation = [
  { name: "Tracker", href: "#", isActive: false },
  { name: "Automizer", href: "#", isActive: false },
];

const rightMenuItem = [
  {
    name: "Notifications",
    icon: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    submenu: [],
  },
  {
    name: "Support",
    icon: <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />,
    submenu: [
      { title: "Technical Docs", href: "#" },
      { title: "Academy", href: "#" },
      { title: "Webinars", href: "#" },
      { title: "Video Tutorials", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Contact us", href: "#" },
    ],
  },
  {
    name: "Settings",
    icon: <CogIcon className="h-6 w-6" aria-hidden="true" />,
    submenu: [],
  },
  {
    name: "Profile",
    icon: (
      <div className="h-8 w-8 rounded-full cursor-pointer">
        <Image src={UserIcon} alt="userprofileicon" />
      </div>
    ),
    submenu: [
      { title: "Profile", href: "/profile" },
      { title: "Security", href: "#" },
      { title: "Key features", href: "#" },
      { title: "General settings", href: "#" },
      { title: "Give Feedback", href: "#" },
    ],
  },
];

interface FormValues {
  firstName: string;
  lastName?: string;
}

const validationSchema = yup.object().shape({
  firstName: yup.string().min(2, "Minimum two character required!").required(),
  lastName: yup.string().min(2, "Minimum two character required!").required(),
});

function Userprofile() {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const methods = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const {
    handleSubmit,
    control,
    setValue: setFormData,
    formState: { errors, isDirty },
  } = methods;
  const { data: session, status } = useSession();

  const fetchInfo = useCallback(async () => {
    const response = await fetch(
      `api/profileData?accessToken=${session?.token}`
    );
    const data = await response.json();
    setFormData("firstName", data?.firstName ?? "", {
      shouldTouch: true,
      shouldDirty: true,
      shouldValidate: true,
    });
    setFormData("lastName", data?.lastName ?? "", {
      shouldTouch: true,
      shouldDirty: true,
      shouldValidate: true,
    });
  }, [session?.token, setFormData]);

  const handleCancel = useCallback(() => {
    setIsEdit(!isEdit);
    fetchInfo();
  }, [fetchInfo, isEdit]);

  const onSubmit = async (formData: FormValues) => {
    try {
      const params = { ...formData, timezone: "America/New_York" };
      const response = await fetch(
        `api/profileData?accessToken=${session?.token}`,
        {
          method: "PUT",
          body: JSON.stringify(params),
        }
      );
      if (response?.status === 200) {
        setIsEdit(!isEdit);
        fetchInfo();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  return (
    <>
      <div className="min-h-screen bg-[#edf1f5]">
        <header className="bg-white shadow-sm">
          <NavBar
            leftMenuItems={navigation}
            rightMenuItems={rightMenuItem}
            mainIcon={
              <div className="h-8 w-8">
                <Image
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                  height="100%"
                  width="100%"
                />
              </div>
            }
          />
        </header>
        <main className="flex items-center justify-center">
          <div className="bg-white md:w-1/2 p-[20px] mt-10">
            <Box className="m-auto">
              <Head>
                <title>User Form</title>
              </Head>
              <Box className="text-center">
                <Image
                  src={UserIcon}
                  alt="Workflow"
                  height="100%"
                  width="100%"
                />
              </Box>
              {!isEdit && (
                <Tooltip label="edit Profile">
                  <PencilAltIcon
                    className="float-right text-40 text-sky-400 font-extrabold hover:animate-bounce w-6 h-6"
                    onClick={() => {
                      setIsEdit(!isEdit);
                      fetchInfo();
                    }}
                  />
                </Tooltip>
              )}

              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <TextInput
                          type="text"
                          autoComplete="off"
                          label="First Name"
                          name="firstName"
                          disabled={!isEdit}
                          className="border border-0"
                          value={value}
                          onChange={(event: any) => {
                            onChange(event.target.value);
                          }}
                          error={errors?.firstName?.message}
                        />
                      );
                    }}
                  />
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <TextInput
                          required
                          type="text"
                          autoComplete="off"
                          label="Last Name"
                          name="lastName"
                          disabled={!isEdit}
                          value={value}
                          onChange={(event: any) => {
                            onChange(event.target.value);
                          }}
                          error={errors?.lastName?.message}
                        />
                      );
                    }}
                  />
                  {isEdit && (
                    <>
                      <Box className="mt-3">
                        <Button
                          type="submit"
                          disabled={
                            Boolean(errors?.firstName?.message) ||
                            Boolean(errors?.lastName?.message)
                          }
                          className="float-left text-sky-400 font-bold hover:text-white"
                        >
                          save
                        </Button>
                        <Button
                          type="button"
                          className="float-right text-red-600 hover:text-white font-bold"
                          onClick={handleCancel}
                        >
                          Cancel
                        </Button>
                      </Box>
                    </>
                  )}
                </form>
              </FormProvider>
            </Box>
          </div>
        </main>
      </div>
    </>
  );
}

export default Userprofile;
