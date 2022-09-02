import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Tooltip, Typography } from "@mui/material";
import NavigationDashboard from "@app/components/tailwindui/NavigationDashboard";
import { PencilAltIcon } from "@heroicons/react/outline";
import { getSession } from "next-auth/react"

function Userprofile(session: any) {
  const [user, setUser] = useState({ firstName: '', lastName: '' })

  const [error, setError] = useState({ firstName: true, lastName: true });
  const [allValues, setAllValues] = useState({ firstName: ' ', lastName: '' });
  const [edit, setEdit] = useState(false);

  const firstRef = useRef(null);
  const lastRef = useRef(null);

  const fetchInfo = async () => {
    const session = await getSession()
    const response = await fetch(`api/profileData?accessToken=${session?.accessToken}`);
    const data = await response.json();
    setAllValues({ firstName: data.firstName, lastName: data.lastName })
    setUser({ firstName: data.firstName, lastName: data.lastName })
  }

  const updateInfo = async () => {
    const session = await getSession()
    const response = await fetch(`api/profileData?accessToken=${session?.accessToken}`, {
      method: 'PUT',
      body: JSON.stringify({
        firstName: allValues.firstName,
        lastName: allValues.lastName,
        timezone: "America/New_York"
      }),
    }
    );
    const data = await response.json();
    setAllValues({ firstName: data.firstName, lastName: data.lastName })
    setUser({ firstName: data.firstName, lastName: data.lastName })
  };

  const editProfile = () => {
    setEdit(true);
    setAllValues({
      ...allValues
    });
  };

  const cancelEditing = () => {
    setEdit(false);
    setAllValues({
      firstName: user.firstName,
      lastName: user.lastName
    });
  };

  const handleChange = (e) => {
    const regex = /^[A-Za-z ]+$/;

    if (e.target?.value !== "") {
      setError({
        ...error,
        [e.target.name]: regex.test(e.target.value)
      });
    } else {
      setError({
        ...error,
        [e.target.name]: true
      });
    }

    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    updateInfo()
    e.target.reset();
    setEdit(false);
  };

  useEffect(() => {
    fetchInfo()
  }, [])
  return (
    <>
      <NavigationDashboard session={session}>
        <div className=" text-center">
          <Box className="m-auto" width={340}>
            <Head>
              <title>User Form</title>
            </Head>
            <div>
              <img
                className="h-16 w-16 inline mt-10 rounded-lg"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>

            <Tooltip title="edit Profile">
              <PencilAltIcon
                className="float-right text-40 text-sky-400 font-extrabold hover:animate-bounce w-6 h-6"
                onClick={editProfile}
              />
            </Tooltip>
            <Typography className="my-4 bg-clip-text font-extrabold text-2xl font-mono">
              {`${edit ? "edit profile" : "user profile"}`}
            </Typography>
            <form onSubmit={onSubmitForm}>
              <TextField
                className="min-h-[80px]"
                ref={firstRef}
                required
                fullWidth
                type="text"
                autoComplete="off"
                margin="dense"
                label="First Name"
                variant="outlined"
                name="firstName"
                disabled={edit ? false : true}
                value={allValues.firstName}
                onChange={handleChange}
                error={error.firstName === false ? true : false}
                helperText={
                  error.firstName === false
                    ? "first name only include alphabets..."
                    : ""
                }
              />
              <TextField
                className="min-h-[80px]"
                autoComplete="off"
                ref={lastRef}
                required
                fullWidth
                margin="dense"
                type="text"
                label="Last Name"
                variant="outlined"
                name="lastName"
                disabled={edit ? false : true}
                value={allValues.lastName}
                onChange={handleChange}
                error={error.lastName === false ? true : false}
                helperText={
                  error.lastName === false
                    ? "last name only include alphabets..."
                    : ""
                }
              />
              {edit ? (
                <>
                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    disabled={
                      error.firstName && error.lastName === true ? false : true
                    }
                    className="float-left text-sky-400 font-bold hover:text-white"
                  >
                    save
                  </Button>
                  <Button
                    onClick={cancelEditing}
                    disabled={
                      error.firstName && error.lastName === true ? false : true
                    }
                    type="button"
                    className="float-right
                  text-red-600 hover:text-white font-bold
                  "
                    variant="contained"
                    color="error"
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                ""
              )}
            </form>
          </Box>
        </div>
      </NavigationDashboard>
    </>
  )
}

export default Userprofile;