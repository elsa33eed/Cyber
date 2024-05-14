import React from "react";
import "./Shop.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TuneIcon from "@mui/icons-material/Tune";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";

export default function Shop() {
  //#region Start Sorting Logic

  const [sort, setSort] = React.useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };
  //#endregion

  //#region Start Filter select button logic
  const [brand, setBrand] = React.useState("");

  const handleBrand = (event) => {
    setBrand(event.target.value);
  };

  const [battery, setBattery] = React.useState("");

  const handleBattery = (event) => {
    setBattery(event.target.value);
  };
  //#endregion

  return (
    <>
      <section className="shop-page py-3">
        <div className="container">
          <div className="row">
            <div className="col-3 d-none d-md-block">
              <div className="filtering-lg">
                <div className="brand mb-2">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Brand
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={brand}
                      onChange={handleBrand}
                      label="Brand"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Apple</MenuItem>
                      <MenuItem value={20}>Samsung</MenuItem>
                      <MenuItem value={30}>Xiaomi</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="brand mb-2">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Brand
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={brand}
                      onChange={handleBrand}
                      label="Brand"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Apple</MenuItem>
                      <MenuItem value={20}>Samsung</MenuItem>
                      <MenuItem value={30}>Xiaomi</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="brand mb-2">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Brand
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={brand}
                      onChange={handleBrand}
                      label="Brand"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Apple</MenuItem>
                      <MenuItem value={20}>Samsung</MenuItem>
                      <MenuItem value={30}>Xiaomi</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="brand mb-2">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Brand
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={brand}
                      onChange={handleBrand}
                      label="Brand"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Apple</MenuItem>
                      <MenuItem value={20}>Samsung</MenuItem>
                      <MenuItem value={30}>Xiaomi</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="brand mb-2">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Brand
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={brand}
                      onChange={handleBrand}
                      label="Brand"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Apple</MenuItem>
                      <MenuItem value={20}>Samsung</MenuItem>
                      <MenuItem value={30}>Xiaomi</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="Battery-capacity mb-2">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Battery capacity
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={battery}
                      onChange={handleBattery}
                      label="Brand"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>100%</MenuItem>
                      <MenuItem value={20}>90%</MenuItem>
                      <MenuItem value={30}>80%</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="Battery-capacity mb-2">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Battery capacity
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={battery}
                      onChange={handleBattery}
                      label="Brand"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>100%</MenuItem>
                      <MenuItem value={20}>90%</MenuItem>
                      <MenuItem value={30}>80%</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="Battery-capacity mb-2">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Battery capacity
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={battery}
                      onChange={handleBattery}
                      label="Brand"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>100%</MenuItem>
                      <MenuItem value={20}>90%</MenuItem>
                      <MenuItem value={30}>80%</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="Battery-capacity mb-2">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Battery capacity
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={battery}
                      onChange={handleBattery}
                      label="Brand"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>100%</MenuItem>
                      <MenuItem value={20}>90%</MenuItem>
                      <MenuItem value={30}>80%</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9">
              <div className="product-info mb-2 d-flex justify-content-between flex-column-reverse flex-md-row align-items-center">
                <div className="selected-product">
                  <p style={{ color: "#6C6C6C" }} className="m-0">
                    Selected Products:{" "}
                    <span style={{ color: "#000000", fontWeight: "bold" }}>
                      85
                    </span>
                  </p>
                </div>
                <div className="group d-flex  align-items-center">
                  <div className="filter d-block d-md-none">
                    <Link to="/shop/filter">
                      <div className="btn-filter">
                        <p className="m-0">Filter</p>
                        <TuneIcon></TuneIcon>
                      </div>
                    </Link>
                  </div>
                  <div className="sorting">
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                        <InputLabel id="demo-simple-select-label">
                          Sorting
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={sort}
                          label="Sorting"
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>By Price</MenuItem>
                          <MenuItem value={20}>By Rating</MenuItem>
                          <MenuItem value={30}>By Version</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
              </div>
              <div className="products d-flex justify-content-center align-items-center gap-3 flex-wrap mb-5">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
