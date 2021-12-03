export default function ({ $axios }, inject){
// Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        // Accept: 'text/plain, */*'
      }
    }
  })

  // Set baseURL to something different
  api.setBaseURL('http://192.168.0.35:8888')

  // Inject to context as $api
  inject('api', api)
}