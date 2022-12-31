import sum from './index'

describe('', () => {
  it('should show only Hours Of Friday', () => {

    const params = {
      input: {
        hourFirstSelected: 800,
        hourFinishSelected: 900,
        doctorSelected: 'Bastian Ahumada',
        filterDay: 'Lunes'
      }
    }
    console.log('test', sum(params))


    
  })
})