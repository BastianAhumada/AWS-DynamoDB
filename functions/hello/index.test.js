import sum from './index'

test('adds 1 + 2 to equal 3', () => {


    const inputs = {
        headers: {
            authorization: "true"
        }
    }

    const response = sum(inputs)
    console.log(response)

});