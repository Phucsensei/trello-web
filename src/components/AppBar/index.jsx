// ... existing code ...
;<TextField
  id="outlined-search"
  label="Search field"
  type="search"
  size="small"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    )
  }}
  sx={{
    minWidth: 120
  }}
/>
// ... existing code ...
