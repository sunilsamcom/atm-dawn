import React, { useEffect } from "react";
import { Box, Stack, Button, Divider, Input, Select, Text, Group, Checkbox } from '@mantine/core';
import 'semantic-ui-css/semantic.min.css'

import { useSelector } from "react-redux";
import {
  BellIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ChevronLeftIcon,
  PlusCircleIcon,
  ChevronRightIcon,
  RefreshIcon,
  ChartPieIcon,
  PlusIcon,
  FlagIcon,
  MenuIcon,
  PencilIcon,
  DuplicateIcon,
  ChevronDownIcon,
  PlayIcon,
  TrashIcon,
  PauseIcon,
  InboxIcon,
  DotsHorizontalIcon,
  DocumentTextIcon,
  ViewListIcon,
  ViewBoardsIcon
} from "@heroicons/react/solid";
import UserIcon from "../../assets/user.png";
import { AppState } from "@app/store  ";
import { addCampaignList, getCampaignList, getCampaignListById, delteCampaignList, setCampaignData, updateCampaignList } from "@app/store/actions/campaign";
import { useDispatch } from "react-redux";
import PaginationComponent from "./components/Pagination";
import MenuComponent from "@app/components/MenuComponent/MenuComponent";
import ModaComponent from "@app/components/tailwindui/Modal";
import Image from "next/image";
import NavBar from "@/components/organisam/NavBar";
import { useToggle } from '@mantine/hooks';
import CampaignDialog from "./CampaignDialog";
import { Table } from 'semantic-ui-react'


interface CampaignsArgs {
  //columns?: any;
  session: any;
}

function Campaigns(session) {
  const [searchTag, setSearchTag] = React.useState("list");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectionModel, setSelectionModel] =
    React.useState<any>([]);
  const campaignList: any[] = useSelector((state: AppState) => state.campaign.data) || [];
  const dispatch = useDispatch();
  const [valueVariant, toggleVariant] = useToggle<any>(['outline', 'filled'])
  const [valueTag, toggleTag] = useToggle<any>(['white', 'blue'])
  // const [variant, toggleVariant]  = useToggle<any>(['oultine', 'filled'])
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
        { title: "Profile", href: "#" },
        { title: "Security", href: "#" },
        { title: "Key features", href: "#" },
        { title: "General settings", href: "#" },
        { title: "Give Feedback", href: "#" },
      ],
    },
  ];
  const columns: any = [
    {
      field: "campaignName",
      headerName: "Campaign",
      headerClassName: "bg-[#64708a] text-white",
      width: 320,
      sortable: false,
      hideable: true,
      filterable: false,
    },
    {
      field: "campaignNotes",
      headerName: "Notes",
      headerClassName: "bg-[#64708a] text-white",
      width: 50,
      sortable: false,
      filterable: false,
      hideable: true,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      headerClassName: "bg-[#64708a] text-white",
      width: 100,
      sortable: false,
      filterable: false,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      headerClassName: "bg-[#64708a] text-white",
      sortable: false,
      filterable: true,
      // filterOperators: getGridStringOperators(),
      hideable: true,
      width: 110,
      editable: true,
    },
    {
      field: "externalStatus",
      headerName: "External Status",
      headerClassName: "bg-[#64708a] text-white",
      sortable: false,
      filterable: false,
      hideable: true,
      width: 110,
      editable: true,
    },
    {
      field: "campaignWorkspaceName",
      headerName: "Campaign Workspace",
      headerClassName: "bg-[#64708a] text-white",
      sortable: false,
      filterable: false,
      hideable: true,
      width: 200,
      editable: true,
    },
    {
      field: "clicks",
      headerName: "Click cap",
      headerClassName: "bg-[#64708a] text-white",
      sortable: false,
      filterable: false,
      hideable: true,
      width: 110,
      editable: true,
    },
    {
      field: "mtti",
      headerName: "MTIC",
      headerClassName: "bg-[#64708a] text-white",
      sortable: false,
      filterable: false,
      hideable: true,
      width: 100,
      editable: true,
    },
  ];

  const getCampaignListData = React.useCallback(
    async () => {
      getCampaignList().then(res => {
        dispatch(setCampaignData(res.data));
      })

    },
    [dispatch]
  );

  useEffect(() => {
    getCampaignListData();
  }, [getCampaignListData]);

  // useEffect(() => {
  //   delteCampaignList(1).then(res => {
  //   });
  // }, []);
  useEffect(() => {
    addCampaignList({
      campaignName: 'campaign 4',
      campaignNotes: 'campaignNotes 4',
      actions: 'action 4 ',
      status: 'status 4',
      externalStatus: 'external status 4 ',
      campaignWorkspaceName: 'campaign Workspace name 4',
      clicks: 'clicks 4',
      mtti: 'Mitti 4',
      visits: 'vsisits 4'
    })
    // updateCampaignList(1, {
    //   campaignName: 'campaign 42',
    //   campaignNotes: 'campaignNotes 4',
    //   actions: 'action 4 ',
    //   status: 'status 4',
    //   externalStatus: 'external status 4 ',
    //   campaignWorkspaceName: 'campaign Workspace name 4',
    //   clicks: 'clicks 4',
    //   mtti: 'Mitti 4',
    //   visits: 'vsisits 4'
    // })
  }, [])

  const GridToolbarComponent = () => {
    // const apiRef = useGridApiContext();
    return (
      <>

      </>
    );
  };

  return (
    <div>
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
      <Stack className=" flex justify-between flex-row items-center w-full gap-2 p-5">
        <Box>
          <Box>
            <Select
              placeholder="Campaigns"
              rightSection={<ChevronDownIcon  />}
              rightSectionWidth={25}
              data={[
                { value: '10', label: 'Ten' },
                { value: '20', label: 'Twenty' },
                { value: '30', label: 'Thirty' },
              ]}
            />

          </Box>
        </Box>
        <Box>
          <Box >
            <Select
              placeholder="Choose Grouping"
              rightSection={<ChevronDownIcon />}
              rightSectionWidth={25}
              data={[
                { value: '10', label: 'Ten' },
                { value: '20', label: 'Twenty' },
                { value: '30', label: 'Thirty' },
              ]}
            />
          </Box>
        </Box>
        <Box>
          <Box>
            <Input.Wrapper id="demo-simple-select-label" className="text-sm">

            </Input.Wrapper>
            <Select
              placeholder="Choose Grouping"
              rightSection={<ChevronDownIcon />}
              rightSectionWidth={25}
              data={[
                { value: '10', label: 'Ten' },
                { value: '20', label: 'Twenty' },
                { value: '30', label: 'Thirty' },
              ]}
            />
          </Box>
        </Box>
        <Box className="flex items-start gap-5">
          <Button className="bg-slate-200 text-black text-sm gap-2">
            <PlusCircleIcon className="h-6 w-6" />
            <Text className="text-sm"> Add</Text>
          </Button>
        </Box>
        <Box className="flex items-start gap-5">
          <Button className="bg-green-500">
            Apply
          </Button>
        </Box>
        <Group className="gap-0 border border-slate-400 rounded p-1">
          <Button variant='outline' className={valueTag !== 'blue' ? " text-white bg-blue-500 hover:text-blue-500" : "border-r-0 text-blue-500 bg-white"} onClick={() => {
            toggleVariant()
            toggleTag()
          }}>Text</Button>
          <Button variant='outline' className={valueTag === 'blue' ? "text-white bg-blue-500 hover:text-blue-500" : "border-l-0 text-blue-500 bg-white"} onClick={() => {
            toggleVariant()
            toggleTag()
          }}>Tags</Button>
          <Input
            icon={<SearchIcon className="h-5 w-5" />}
            variant="unstyled"
            placeholder="Search"
          />
        </Group>

        {/* <Box className="flex items-start gap-5">
          <Box variant="outlined">
            <Input
              id="outlined-adornment-weight"
              placeholder="Search"
              onChange={(event: any) => {
                if (searchTag === "tags") return false;
                const search_text = event.target.value;
                if (search_text.length > 2) {
                  getCampaignListData(0, 5, {
                    filter: event.target.value,
                  });
                } else {
                  getCampaignListData(0, 5);
                }
              }}
              startAdornment={
                <>
                  {/* <ToggleButtonGroup
                    value={"searchTag"}
                    exclusive
                    aria-label="text alignment"
                    onChange={(
                      event: React.MouseEvent<HTMLElement>,
                      nextView: string
                    ) => {
                      setSearchTag(nextView);
                    }}
                    className="p-2 h-10"
                  >
                    <ToggleButton
                      value="text"
                      aria-label="left aligned"
                      style={{
                        backgroundColor:
                          searchTag === "text" ? "#5868ec" : "#fff",
                      }}
                    >
                      Text
                    </ToggleButton>
                    <ToggleButton
                      value="tags"
                      aria-label="centered"
                      style={{
                        backgroundColor:
                          searchTag === "tags" ? "#5868ec" : "#fff",
                      }}
                    >
                      Tags
                    </ToggleButton>
                  </ToggleButtonGroup> 
                </>
              }
            />
          </Box>
        </Box> */}

        <Box className="flex items-start gap-5">
          <Button className="bg-slate-200 text-black">
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>
          <Button className="bg-slate-200 text-black">
            <ChevronRightIcon className="h-6 w-6" />
          </Button>
          <Button className="bg-slate-200 text-black gap-2">
            <RefreshIcon className="h-6 w-6" />
            <Text className="text-sm">Refresh</Text>
          </Button>
          <Button className="bg-slate-200 text-black text-sm gap-2">
            <ChartPieIcon className="h-6 w-6" />{" "}
            <Text className="text-sm"> Charts</Text>
          </Button>
        </Box>
      </Stack>
      <Stack
        // display="flex"
        // flexDirection="row"
        // justifyContent="space-between"
        // alignItems="center"
        // width="100%"
        className="p-5 pt-0 flex flex-row justify-between items-center w-full h-10"
      >
        <Box className="flex gap-2 asbolute top-64">
          <MenuComponent
            toggle={
              <>
                <PlusIcon className="h-5 w-5" />
                <Text className="text-sm"> Create</Text>
              </>
            }
            buttonColor=' bg-green-500'
            options={[
              {
                label: "Campaign",
                value: "Campaign",
                onClick: () => setModalOpen(true),
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
                    <FlagIcon className="h-6 w-6" />
                    Offer
                  </Box>
                ),
                value: "Offer",
              },
              {
                label: (
                  <Box className="flex items-center">
                    <FlagIcon className="h-6 w-6" />
                    Lander
                  </Box>
                ),
                value: "Lander",
              },
              {
                label: (
                  <Box className="flex items-center">
                    <FlagIcon className="h-6 w-6" />
                    Prelander
                  </Box>
                ),
                value: "Prelander",
              },
              {
                label: (
                  <Box className="flex items-center">
                    <FlagIcon className="h-6 w-6" />
                    Flow
                  </Box>
                ),
                value: "Flow",
              },
              {
                label: (
                  <Box className="flex items-center">
                    <FlagIcon className="h-6 w-6" />
                    Traffic source
                  </Box>
                ),
                value: "Traffic source",
              },
              {
                label: (
                  <Box className="flex items-center">
                    <FlagIcon className="h-6 w-6" />
                    Affiliate Network
                  </Box>
                ),
                value: "Affiliate Network",
              },
            ]}
          />
          <Button disabled={selectionModel.length === 0}>
            <MenuIcon className="h-6 w-6" />
            <Text className="text-sm"> Report</Text>
          </Button>
          <Button disabled={selectionModel.length === 0}>
            <MenuIcon className="h-6 w-6" />
            <Text className="text-sm"> Report in new tab</Text>
          </Button>
          <Button
            disabled={
              selectionModel.length > 1 || selectionModel.length === 0
            }
          >
            <PencilIcon className="h-6 w-6" />
            <Text className="text-sm"> Edit</Text>
          </Button>
          <Button
            disabled={
              selectionModel.length > 1 || selectionModel.length === 0
            }
          >
            <DuplicateIcon className="h-6 w-6" />
            <Text className="text-sm"> Duplicate</Text>
          </Button>
          <MenuComponent
            buttonColor='text-blue-500 hover:text-white text-lg'
            toggle={
              <>
                <DocumentTextIcon className="h-6 w-6 mr-1" />
                <Text className="text-sm"> Actions</Text>
                <ChevronDownIcon  className="h-6 w-6 ml-1" />
              </>
            }
            btnProps={{
              className:
                "text-slate-300 border border-0 text-sm box-border-0 shadow-none hover:bg-#f3f3f3",
              variant: "contained",
              disabled: selectionModel.length === 0,
            }}
            options={[
              {
                label: (
                  <Box className="flex items-center">
                    <TrashIcon className="h-6 w-6" />
                    Archive
                  </Box>
                ),
                value: "Archive",
              },
              // {
              //   label: (
              //     <Box className="flex">
              //       {/* <SettingsBackupRestoreIcon /> */}
              //         Restore
              //     </Box>
              //   ),
              //   value: "Restore",
              //   disabled: selectionModel.length <= 1,
              // },
              {
                label: (
                  <Box className="flex items-center">
                    <PauseIcon className="h-6 w-6" />
                    Pause
                  </Box >
                ),
                value: "Pause",
                disabled: selectionModel.length <= 1,
              },
              {
                label: (
                  <Box className="flex items-center">
                    <PlayIcon className="h-6 w-6" />
                    Resume
                  </Box>
                ),
                value: "Resume",
                disabled: selectionModel.length <= 1,
              },
            ]}
          />
          <MenuComponent
            buttonColor='text-blue-500 hover:text-white text-lg'
            toggle={
              <>
                <DotsHorizontalIcon className="h-6 w-6 mr-1" />
                <Text className="text-sm"> More</Text>
                <ChevronDownIcon className="h-6 w-6 ml-1" />
              </>
            }
            btnProps={{
              className:
                "text-slate-300 border border-0 text-sm box-border-0 shadow-none hover:bg-#f3f3f3",
              variant: "contained",
              disabled: selectionModel.length === 0,
            }}
            options={[
              {
                label: (
                  <Box className="flex items-center">
                    <TrashIcon className="h-6 w-6" />
                    Archive
                  </Box>
                ),
                value: "Archive",
              },
              {
                label: (
                  <Box className="flex items-center">
                    <PauseIcon className="h-6 w-6" />
                    Pause
                  </Box >
                ),
                value: "Pause",
                disabled: selectionModel.length <= 1,
              },
              {
                label: (
                  <Box className="flex items-center">
                    <PlayIcon className="h-6 w-6" />
                    Resume
                  </Box>
                ),
                value: "Resume",
                disabled: selectionModel.length <= 1,
              },
            ]}
          />
        </Box>
        <Box className="flex gap-2 asbolute top-64">
          <MenuComponent
            buttonColor='text-blue-500 hover:text-white text-lg'
            toggle={
              <>
                <InboxIcon className="h-6 w-6 mr-1" />
                <Text className="text-sm"> Active</Text>
                <ChevronDownIcon  className="h-6 w-6 ml-1" />
              </>
            }
            options={[
              {
                label: "Active",
                value: "Active",
              },
              {
                label: "Archive",
                value: "Archive",
              },
              {
                label: "With traffic",
                value: "With traffic",
              },
              {
                label: "All",
                value: "All",
              },
            ]}
          />
          <MenuComponent
            buttonColor='text-blue-500 hover:text-white text-lg'
            toggle={
              <>
                <ViewBoardsIcon className="h-6 w-6 mr-1" />
                <Text className="text-sm">Columns</Text>
                <ChevronDownIcon  className="h-6 w-6 ml-1" />
              </>
            }
            options={[
              {
                label: "Active",
                value: "Active",
              },
              {
                label: "Archive",
                value: "Archive",
              },
              {
                label: "With traffic",
                value: "With traffic",
              },
              {
                label: "All",
                value: "All",
              },
            ]}
          />
          <PaginationComponent />
        </Box>

      </Stack>
      <Table celled striped selectable compact definition>
        <Table.Header className="text-white bg-slate-500" fullWidth>  
          <Table.Row className="text-white bg-slate-500">
            <Table.HeaderCell  style={{backgroundColor: "#67708B", color:'white'}}   />
            {columns.map((e: any, i: number) => {
              return (
                <Table.HeaderCell style={{backgroundColor: "#67708B", color:'white'}}  className="text-white bg-slate-500" key={i}>{e.headerName}</Table.HeaderCell>
              )
            })
            }
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {campaignList !== undefined && campaignList?.map(({ id, campaignNotes, actions, status, externalStatus, campaignWorkspaceName, clicks, mtti }: any, index: number) => {
            return (
              <>
                {
                  <Table.Row key={index}>
                    <Table.Cell collapsing className = "cursor-pointer">
                      <Checkbox className = "cursor-pointer" />
                    </Table.Cell>
                    <Table.Cell>{id}</Table.Cell>
                    <Table.Cell>{campaignNotes}</Table.Cell>
                    <Table.Cell>{actions}</Table.Cell>
                    <Table.Cell>{status}</Table.Cell>
                    <Table.Cell>{externalStatus}</Table.Cell>
                    <Table.Cell>{campaignWorkspaceName}</Table.Cell>
                    <Table.Cell>{clicks}</Table.Cell>
                    <Table.Cell>{mtti}</Table.Cell>
                  </Table.Row>
                }
              </>

            )
          })}
        </Table.Body>
      </Table>

      <ModaComponent
        title="We added a new, simplified form for campaign creation"
        open={modalOpen}
        aria-labelledby="customized-dialog-title"
        className="p-5 w-full"
        size="xl"
        onClose={() => setModalOpen(false)}
        // fullWidth
        hideBackdrop
        isFooterBtn={false}
        maxWidth="md"
        headerProps={{
          className:
            "flex m-0 p-2 align-center justify-center font-bold text-xl shadow-md text-center",
          id: "customized-dialog-title",
        }}
      >
        <CampaignDialog />
      </ModaComponent>

    </div>

  );
}
export default Campaigns;
