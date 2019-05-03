# options for select


## select/option
```rb
#  select
<%= select_tag(:city_id, options_for_select(...)) %>
```
```rb
# options:
<%= options_for_select([['Lisbon', 1], ['Madrid', 2], ...]) %>
```

## html
```html
<select name="city_id" id="city_id">
  <option value="1">Lisbon</option>
  <option value="2">Madrid</option>
  ...
  <option value="12">Berlin</option>
</select>
```