export const TopTab = ({ names, onRestarauntSelect }) => {
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
