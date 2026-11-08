import Field from "./Field"

const SearchTaskForm = (props) => {
  const {
    serchQuery,
    setSearchQuery,
  } = props

  return (
    <form className="todo__form">
      <Field
        className="todo__field"
        id="search-task"
        label="Search task"
        type="search"
        value={serchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  )
}

export default SearchTaskForm