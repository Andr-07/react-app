export const Tabs = ({ names }) => {
  return (
    <>
      {names.map((name, key) => (
        <button onClick={() => onRestarauntSelect(name)} key={key}>
          {name}
        </button>
      ))}
    </>
  )
}
