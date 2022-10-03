import MenuComponent from "@/components/MenuComponent/MenuComponent";
import ModalComponent from "@/components/tailwindui/Modal";
import { Box, Button, Group, Input, Menu, Radio, Tabs, Text } from "@mantine/core";
import { QuestionMarkCircleIcon, ChevronDownIcon, ArrowRightIcon, PlusCircleIcon } from "@heroicons/react/solid";
// import { Tab } from "@mantine/core/lib/Tabs/Tab/Tab";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Text>{children}</Text>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {


  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const SimpleForm = ({ modalOpen, handleModalClose }) => {
  const [value, setValue] = React.useState("General");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event: React.SyntheticEvent, newValue) => {
    setValue(newValue);
  };

  return (
    <ModalComponent
      title="New Campaign"
      open={modalOpen}
      aria-labelledby="customized-dialog-title"
      className="p-5 w-full"
      onClose={handleModalClose}
      //   fullWidth
      //   hideBackdrop
      isFooterBtn={true}
    //   maxWidth="md"
    //   headerProps={{
    //     className:
    //                 "flex m-0 p-2 align-center justify-center font-bold text-xl shadow-md text-center w-full",
    //     id: "customized-dialog-title",
    //   }}
    >
      <>
        <Tabs sx={{ width: '100%' }}>
          <Tabs.List className="w-full flex border-0 justify-around" aria-label="basic tabs example">
            <Tabs.Tab value="General" className={
              value === "General"
                ? " z-10 h-full w-1/2 max-w-none border-b-white border-b-4 border-t-blue-500 border-t-2 font-semibold truncate text-slate-400 bg-white border border-solid border-[#c2cded]"
                : "z-10 h-full  w-1/2 max-w-none font-semibold truncate text-slate-400 bg-slate-100 border border-solid border-[#c2cded] border-b-0"
            }
            {...a11yProps(0)} >General</Tabs.Tab>
            <Tabs.Tab value="Track" className={
              value === "Track"
                ? " z-10 h-full w-1/2 max-w-none border-b-white border-b-4 border-t-blue-500 border-t-2 font-semibold truncate text-slate-400 bg-white border border-solid border-[#c2cded]"
                : "z-10 h-full  w-1/2 max-w-none font-semibold truncate text-slate-400 bg-slate-100 border border-solid border-[#c2cded] border-b-0"
            } {...a11yProps(1)} >Track</Tabs.Tab>
          </Tabs.List>
          <Box className="bg-slate-100 max-h-10 border">
            {/* <Box className="flex flex-row justify-end items-center gap-2">
              <Text className="cursor-pointer" >
                {/* <ChromeReaderModeIcon className="text-sm" />    
                 Article
              </Text>
              <Text className="cursor-pointer">
                {/* <ChatIcon className="text-sm" />  
                Give Feedback
              </Text>
              <Text  className="bg-blue-900  cursor-pointer text-white">
                {/* <HelpOutlineIcon className="text-sm" /> 
              </Text>
            </Box> */}
          </Box>
          <Tabs.Panel value="General" >
            <Text className="font-bold">General</Text>
            <Box className="flex gap-4 pt-2">
              <Box>
                <Input.Wrapper id="TrafficSource" className="text-sm font-bold h-7 flex items-center">
                  Traffic Source
                </Input.Wrapper>
                <Input
                  id="TrafficSource"
                  name="TrafficSource"
                  className="border"
                  sx={{ width: "100%" }}
                  type='number'
                  aria-describedby="standard-weight-helper-text"

                />
              </Box>
              <Box >
                <Input.Wrapper items-center id="CountryTag" className="text-sm font-bold h-7 flex items-center"> Country tag<QuestionMarkCircleIcon className="text-slate-300 h-6 w-6" />
                </Input.Wrapper>
                <Input
                  id="CountryTag"
                  name="CountryTag"
                  className="border"
                  sx={{ width: "100%" }}
                  type='number'
                  aria-describedby="standard-weight-helper-text"

                />
              </Box>
            </Box>
            <Box className="pt-2">
              <Input.Wrapper id="Name" className="text-sm font-bold">
                Name
              </Input.Wrapper>
              <Input
                id="Name"
                name="Name"
                className="border"
                sx={{ width: "100%" }}
                type='text'
                aria-describedby="standard-weight-helper-text"
              />
            </Box>
            <Box>
              {/* <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='text-sm pl-0'
              > Notes
                {/* <KeyboardArrowDownIcon /> 
              </Button> */}
              <MenuComponent
                toggle={
                  <>
                    <Text className="text-sm flex p-0 items-center"> Notes <ChevronDownIcon className="text-blue-500  h-5 w-5" /> </Text>
                  </>
                }
                buttonColor='text-blue-500 hover:bg-white p-0'
                options={[
                  {
                    label: "Campaign",
                    value: "Campaign",
                  },
                  { label: "", value: "", type: "Divider" },
                  {
                    label: "Other entities",
                    value: "Other entities",
                    type: "Typography",
                  },
                  {
                    label: (
                      <Box className="flex items-center">
                        Offer
                      </Box>
                    ),
                    value: "Offer",
                  },
                  {
                    label: (
                      <Box className="flex items-center">
                        Lander
                      </Box>
                    ),
                    value: "Lander",
                  },
                  {
                    label: (
                      <Box className="flex items-center">
                        Prelander
                      </Box>
                    ),
                    value: "Prelander",
                  },
                  {
                    label: (
                      <Box className="flex items-center">
                        Flow
                      </Box>
                    ),
                    value: "Flow",
                  },
                  {
                    label: (
                      <Box className="flex items-center">
                        Traffic source
                      </Box>
                    ),
                    value: "Traffic source",
                  },
                  {
                    label: (
                      <Box className="flex items-center">
                        Affiliate Network
                      </Box>
                    ),
                    value: "Affiliate Network",
                  },
                ]}
              />
              {/* <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu> */}
              <MenuComponent
                buttonColor='text-blue-500 hover:text-white text-lg'
                toggle={
                  <>
                    <Text className="text-sm"> Actions</Text>
                  </>
                }
                btnProps={{
                  className: "text-slate-300 border border-0 text-sm box-border-0 shadow-none hover:bg-#f3f3f3",
                  variant: "contained",
                }}
                options={[
                  {
                    label: (
                      <Box className="flex items-center">
                        Profile
                      </Box>
                    ),
                    value: "Archive",
                  },
                  {
                    label: (
                      <Box className="flex items-center">
                        My account
                      </Box >
                    ),
                    value: "Pause",
                  },
                  {
                    label: (
                      <Box className="flex items-center">
                        Logout
                      </Box>
                    ),
                    value: "Resume",

                  },
                ]}
              />
            </Box>
            <Text className="font-bold pt-2">Campaign Designation</Text>
            <Box>
              <Radio.Group
                name="Campaign Designation"
              >
                <Radio value="Flow" label="Flow" defaultChecked />
                <Radio value="Path" label="Path" />
              </Radio.Group>
            </Box>
            <Text className="font-bold pt-3">Path Destination</Text>
            <Box>
              <Radio.Group
                name="Path Destination"
              >
                <Radio value="Landers & Offers" label="Landers & Offers" defaultChecked />
                <Radio value="OffersOnly" label="Offers Only" />
              </Radio.Group>
            </Box>
            <Text className="font-bold pt-3 flex items-center">Transition to offer
              <QuestionMarkCircleIcon className="text-slate-300 h-6 w-6" />
            </Text>
            <Box className="mb-2 ">
              <Radio.Group
                name="Transition to offer"
              >
                <Radio value="302" label="302" defaultChecked />
                <Radio value="MetaRefresh" label="Meta Refresh" />
                <Radio value="DoubleMetaRefresh" label="Double Meta Refresh" />
                <Radio value="Direct" label="Direct" />
              </Radio.Group>
            </Box>
            <Box className="bg-slate-300 flex flex-row items-center p-1 gap-1">
              <Text className="text-sm">Your traffics flow:</Text><Text className="text-sm">Ad</Text><ArrowRightIcon className="h-6 w-6" /><Text className="text-sm">Lander</Text><ArrowRightIcon className="h-6 w-6" /><Text className="text-sm">Offer</Text>
            </Box>
            <Box>
              <Box className="flex flex-row justify-between">
                <Text className="font-bold pt-3 text-lg flex items-center">Landers <QuestionMarkCircleIcon className="text-slate-300  h-5 w-5" /></Text>
                <Text className="text-sm normal-case cursor-pointer flex items-center text-blue-600" ><PlusCircleIcon className="h-5 w-5" />Add offer</Text>
              </Box>
              <Box className="border-y-2 flex flex-row justify-between">
                <Text>1. Select Lander</Text>
                <Text>100(100%)</Text>
              </Box>
            </Box>
            <Box className="pt-5">
              <Box className="flex flex-row justify-between">
                <Text className="font-bold pt-3 text-lg flex items-center">Offers <QuestionMarkCircleIcon className="text-slate-300  h-5 w-5" /></Text>
                <Text className="text-sm normal-case cursor-pointer flex items-center text-blue-600" ><PlusCircleIcon className="h-5 w-5" />Add offer</Text>
              </Box>
              <Box className="border-y-2 flex flex-row justify-between">
                <Text>1. Select Lander</Text>
                <Text>100(100%)</Text>
              </Box>
            </Box>
          </Tabs.Panel>

          <Tabs.Panel value="Track">
            Item Two
          </Tabs.Panel>
        </Tabs>
      </>
    </ModalComponent>
  )
};

export default SimpleForm;
