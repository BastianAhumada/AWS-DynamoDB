

export default (event, context) => {

  const { hourFirstSelected, hourFinishSelected, doctorSelected, filterDay } = event.input

  const CreateHoursForHours = []

  let nameDoctor = 'Bastian Ahumada'
  let specialty = 'Veterinarian'

  let MonthSelected = [
    {
      Month: 'Abril',
      weeks: 1
    },
    {
      Month: 'Marzo',
      weeks: 3
    },
    {
      Month: 'Mayo',
      weeks: 4
    }]


  let HoursSelected = [{
    startReservation: 8015,
    finishReservation: 9000
  }]


  //Create List Of Availible Hours Of Reservation

  const AvailibleHours = []

  for (let m = 0; m < MonthSelected.length; m++) {
    const element = MonthSelected[m];
    
    for (let w = 1; w <= element.weeks; w++) {
      
      for (let d = 0; d <= 5; d++) {
        const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes','Sabado']

        const Item = {
          name: 'Bastian Ahumada',
          specialty: 'Veterinarian',
          Hours: HoursSelected,
          day: days[d],
          Month: element.Month,
          week: w
        }

        AvailibleHours.push(Item)

      }
    }
  }

  console.log('AvailibleHours', AvailibleHours)

  function DistributedHours(...Hours) {

    let HoursArr = []

    for (let index = 0; index < Hours.length; index++) {
      const element = Hours[index];

      const Item = {
        hourStart: element[0],
        hoursFinish: element[1]
      }

      HoursArr.push(Item)

    }

    return HoursArr
  }
  //   const avalibleHours = [
  //     { hourAvailible: '8:00 - 9:00', hourFirst: 800, HourFinish: 900, avalibeStatus: true, Doctor: 'Bastian Ahumada' },
  //     { hourAvailible: '10:00 - 11:00', hourFirst: 1000, HourFinish: 1100, avalibeStatus: true, Doctor: 'Bastian Ahumada' },
  //     { hourAvailible: '12:15 - 13:00', hourFirst: 1115, HourFinish: 1200, avalibeStatus: true, Doctor: 'Camila Jimenez' },
  //     { hourAvailible: '14:00 - 15:00', hourFirst: 1215, HourFinish: 1300, avalibeStatus: true, Doctor: 'Bastian Ahumada' },
  //     { hourAvailible: '16:00 - 17:00', hourFirst: 1315, HourFinish: 1400, avalibeStatus: true, Doctor: 'Bastian Ahumada' },
  //     { hourAvailible: '17:00 - 18:00', hourFirst: 1600, HourFinish: 1700, avalibeStatus: true, Doctor: 'Camila Jimenez' },
  //   ]

}

