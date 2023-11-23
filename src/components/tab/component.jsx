export const Tab = ({ names }) => {
  return (
    <>
      {names.map((name, key) => (
        <button key={key}>{name}</button>
      ))}
    </>
  )
}
