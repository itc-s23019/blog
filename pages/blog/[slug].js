const async getStaticPaths() = () => {
  return {
    paths: [{ params: { slug: 'schedule' }}, { params: {slug: 'music' }} ]
    fallback: false,
  }
}

export default getStaticPaths

const getServerSideProps(context) = () => {
  console.log('params: ', context.params)
  return {
    props: { message: "Dynamic Routes" }
  }
}

export default getSeverSideProps
