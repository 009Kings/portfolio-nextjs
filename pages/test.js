export default function Test({queryParam}) {
  let name = queryParam || ''

  return (
    <>
      <h1 id="hello">🔪 to meet you, {name}</h1>
      <style jsx>
        {`
          #hello {
            color: hotpink;
          }
        `}
      </style>
    </>
  )
}

export function getServerSideProps({query}) {
  // get query params from url
  let queryParam = query.name || null

  return {
    props: {
      queryParam,
    }
  }
}