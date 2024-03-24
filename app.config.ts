export default defineAppConfig({

  ui: {
    variables: {

      header: {
        height: '7rem'
      }
    },
    primary: 'sky',
    gray: 'cool',
    button: {
      rounded: 'rounded-full',
      default: {
        size: 'md'
      }
    },
    input: {
      default: {
        size: 'md'
      }
    },
    card: {
      rounded: 'rounded-xl'
    },
    footer: {
      top: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
        container: 'py-8 lg:py-16'
      },
      bottom: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    },
    page: {
      hero: {
        wrapper: 'lg:py-24'
      },
      pricing:
        {
    wrapper: 'flex flex-col lg:grid lg:grid-cols-4 w-full justify-center items-center gap-8'
        },  
    }
  }
})
