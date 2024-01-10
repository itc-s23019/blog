const Test = ({ props }) => {
  console.log('test.js: ', props)

  return <h1>Test</h1>
}
export default Test

const getStaticProps = () => {
  return {
    props: {
      message: 'データの流れ'
    }
  }
}
export default getStaticProps
