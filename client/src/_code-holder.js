// app.js
<div className="filter-select-list">
 <h3 className="app-header-2" >Filters</h3>
 <Form.Control
  as="select"
  id="inlineFormCustomSelect"
  className="custom-select"
  onChange={updateFilter}>
  <option value="0">Choose...</option>
  <option value="vegan">Vegan</option>
  <option value="vegetarian">Vegetarian</option>
  <option value="peanut-free">Peanut-Free</option>
  <option value="tree-nut-free">Tree-Nut-Free</option>
  <option value="peanut-free">Peanut-Free</option>
 </Form.Control>
</div>