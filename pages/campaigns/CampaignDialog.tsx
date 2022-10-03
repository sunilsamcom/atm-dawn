import React from "react";
import { Card, Text, Badge, Button, Group } from '@mantine/core'
import simple from "@app/assets/images/simple.jpg";
import advanced from "@app/assets/images/advanced.jpg";
import Image from "next/image";
import SimpleForm from "./SimpleForm";

const CampaignDialog = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalClose = () => setModalOpen(false);
  const handleModalOpen = () => setModalOpen(true);
  return (
    <>
      <Text
        className=" block w-full text-indigo-500 text-lg"
      >
        Choose which one suits your needs better:
      </Text>
      <div className="flex flex-wrap flex-row w-full justify-center gap-20 pt-6">
        <div
          style={{ height: "470px" }}
          className="pt-2 relative rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <Card
            sx={{ minWidth: 320, maxWidth: 320 }}
            className="rounded-none border border-top-0 border-blue-300  h-full"
          >
            <Card.Section>
              <Text
                className=" flex justify-center text-indigo-600 text-xl"
              >
                SIMPLE FORM *
              </Text>
              <div className="w-10 border-bottom-10 border-left-10-transperent  border-right-10-transperent border-cyan-500"></div>
              <div className="flex justify-center">
                <Image src={simple} alt="Simple" />
              </div>
              <div className="mt-2  p-3  font-medium">
                <p className="before:content-['-'] before:mr-2">
                  <span>For quick campaign creation</span>
                </p>
                <p className="before:content-['-'] before:mr-2">
                  <span>Offers all core product features</span>
                </p>
                <p className="before:content-['-'] before:mr-2">
                  <span>Allows simple campaign flow during the setup</span>
                </p>
              </div>
            </Card.Section>
            <Card.Section className="flex justify-center">
              <Button
                className="text-white absolute bottom-5 hover:text-blue-900 hover:bg-slate-200 bg-blue-900 normal-case font-bold px-4"
                onClick={handleModalOpen}
              >
                Try simple form
              </Button>
            </Card.Section>
          </Card>
        </div>

        <div
          style={{ height: "470px" }}
          className="pt-2 relative rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <Card
            sx={{ minWidth: 320, maxWidth: 320 }}
            className="rounded-none border border-top-0 border-blue-300  h-full"
          >
            <Card.Section>
              <Text
                className=" flex justify-center text-indigo-600 text-xl"
              >
                ADVANCED FORM
              </Text>
              <div className="flex justify-center">
                <Image src={advanced} alt="Advance" />
              </div>
              <div className="mt-2 p-3 font-medium">
                <p className="before:content-['-'] before:mr-2">
                  <span>For experienced users</span>
                </p>
                <p className="before:content-['-'] before:mr-2">
                  <span>
                    Offers advanced features(e.g.Traffic Distribution AO, Custom
                    Conversions Reporting)
                  </span>
                </p>
                <div className="before:content-['-'] before:mr-2">
                  <span className="indent-20">
                    Allows extended campaign setup(e.g. multiple paths,
                    conditional rules)
                  </span>
                </div>
              </div>
            </Card.Section>
            <Card.Section className="flex justify-center">
              <Button
                className="text-white absolute bottom-5 hover:text-blue-900 hover:bg-slate-200  bg-blue-900 normal-case font-bold px-4"
              >
                Use Advanced Form
              </Button>
            </Card.Section>
          </Card>
        </div>
      </div>
      <Text
        sx={{
          minWidth: 320,
          maxWidth: 320,
          fontSize: "0.75rem",
        }}
        className=" text-center pt-3"
      >
        * If you are not interested in a simple campaign form,
        <br /> you can easily turn it off in the{" "}
        <span className="cursor-pointer  text-blue-500">settings</span>.
      </Text>
      <SimpleForm modalOpen={modalOpen} handleModalClose={handleModalClose} />
    </>
  );
};

export default CampaignDialog;
