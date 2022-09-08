import React from "react";
import PropTypes from "prop-types";
import Downshift from "downshift";
import { Chip, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


export default function TagsInput(props: any) {

  const { placeholder, inputValue, handleInputChange, handleKeyDown, setInputValue, selectedItem, handleChange, handleDelete, ...other }: any = props;

  return (
    <React.Fragment>
      <Downshift
        id="downshift-multiple"
        inputValue={inputValue}
        onChange={handleChange}
        selectedItem={selectedItem}
      >
        {({ getInputProps }) => {
          const { onBlur, onChange, onFocus, ...inputProps }: any = getInputProps({
            onKeyDown: handleKeyDown,
            placeholder,
            setInputValue,
            inputValue
          });
          return (
            <div className="overflow-y-auto flex flex-wrap">
              <TextField
                variant="standard"
                type={'text'}
                className='w-full overflow-y-auto flex flex-wrap text-white'
                InputProps={{
                  startAdornment: selectedItem.map((item) => (
                    <Chip
                      className="border rounded-none mr-1 bg-slate-300 text-sm mb-1 text-white"
                      //   style={{border: '1px', borderRadius: '1px'}}
                      key={item}
                      tabIndex={-1}
                      deleteIcon={<CloseIcon />}
                      label={item}
                      onDelete={handleDelete(item)}
                    />
                  )),
                  onBlur,
                  onChange: (event: any) => {
                    handleInputChange(event);
                    onChange?.(event);
                  },
                  onFocus
                }}
                {...other}
                {...inputProps}
              />
            </div>
          );
        }}
      </Downshift>
    </React.Fragment>
  );
}
TagsInput.defaultProps = {
  tags: []
};
