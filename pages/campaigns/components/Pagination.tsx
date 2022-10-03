import React from "react";

// import { IconButton } from "@mui/material";
import { Box,Select } from '@mantine/core';
import { Pagination } from 'semantic-ui-react'
import MenuComponent from "@app/components/MenuComponent/MenuComponent";
import { ChevronDownIcon, ViewListIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const PaginationComponent = () => {
  const [pageSize, setPageSize] = React.useState<number>(5);
  // const page = useGridSelector(apiRef, gridPageSelector);
  // const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  // const paginationVisible = useGridSelector(
  //   apiRef,
  //   gridPaginationRowRangeSelector
  // );
  const [state, setState]: any = React.useState({
    activePage: 5,
    boundaryRange: 1,
    siblingRange: 1,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
    totalPages: 5,
  })
  const {
    activePage,
    boundaryRange,
    siblingRange,
    showEllipsis,
    showFirstAndLastNav,
    showPreviousAndNextNav,
    totalPages,
  } = state
  const  handlePaginationChange = (e, { activePage }) => setState({ activePage })
 
  return (
    <Box className=" flex flex-row items-center">
      <Select
        className="w-20 border-0"
        icon = {<ViewListIcon  className=" text-blue-500" />}
        rightSection={<ChevronDownIcon className=" text-blue-500" />}
        rightSectionWidth={25}
        iconWidth={25}
        variant={"unstyled"}

        // size={25}
        placeholder="100"
        data={[
          { value: '25', label: '25' },
          { value: '50', label: '50' },
          { value: '75', label: '75' },
          { value: '100', label: '100' },
        ]}
      />
      <Pagination
        activePage={activePage}
        boundaryRange={boundaryRange}
        // onPageChange={handlePaginationChange}
        size='mini'
        siblingRange={siblingRange}
        totalPages={totalPages}
        // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
        ellipsisItem={showEllipsis ? undefined : null}
      />  
      {/* <ChevronLeftIcon />
      <ArrowBackIosIcon />
      <ArrowForwardIosIcon />
      <KeyboardDoubleArrowRightIcon /> */}
    </Box>
  );
};

export default PaginationComponent;
