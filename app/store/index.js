import devStoreFactory from '@store/store-factory.dev'
import prodStoreFactory from '@store/store-factory.prod'

export default (initialState) => {
  const store = (process.env.NODE_ENV === 'production') ?
    prodStoreFactory(initialState) :
    devStoreFactory(initialState)

  return store
}
