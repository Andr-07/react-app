export const Tabs = ({ names }) => {
  return (
    <>
      {names.map((name, key) => (
        <button key={key}>{name}</button>
      ))}
    </>
  )
}