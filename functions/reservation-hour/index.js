

export default (event, context) => {

  const { hourFirstSelected, hourFinishSelected, doctorSelected, filterDay } = event.input


  const CreateHoursForHours = []


  let nameDoctor = 'Bastian Ahumada'
  let specialty = 'Veterinarian'

  let dayOfWork = [
  ['lunes', 1, {
    hours: [[8000, 9000], [9015,1000]]
  }],
  ['martes', 1, {
    hours: [[8000, 9000]]
  }],
  ['miercoles', 1, {
    hours: [[8000, 9000]]
  }],
  ['jueves', 1, {
    hours: [[8000, 9000]]
  }],
  ['viernes', 1, {
    hours: [[8000, 9000]]
  }]
]


  let Months = [['abril', 2], ['mayo', 4]] // , ['mayo', 4], ['Junio', 4]

  let hoursAvailibeFromDoctor = []

  let Hours = []
  for (let m = 0; m < Months.length; m++) {
    const MonthsCurrently = Months[m]
    for (let w = 0; w <= MonthsCurrently[1]; w++) {

      for (let d = 0; d < dayOfWork.length; d++) {
        const element = dayOfWork[d];

        for (let h = 0; h < element[2].hours.length; h++) {

          const HoursForDays = element[2].hours

          const Item = {
            Months: MonthsCurrently[0],
            week: w + 1,
            Day: element[0],
            Hours: DistributedHours(...HoursForDays),
            nameDoctor: nameDoctor,
            specialty: specialty,
            status: false
          }

          hoursAvailibeFromDoctor.push(Item)

        }

        
      }

    }
  }
    console.log(hoursAvailibeFromDoctor)
    console.log('hoursAvailibeFromDoctor', hoursAvailibeFromDoctor.filter(e => e.Day.toLowerCase() === filterDay.toLowerCase()))


    function DistributedHours (...Hours) {

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


    //   const FilterByHoursSelected = FilterHoursByDoctorSelected(doctorSelected, avalibleHours)
    //   FindHours( hourFirstSelected, hourFinishSelected , FilterByHoursSelected) 


    //   console.log('avalibleHours', avalibleHours)

    // }


    // function FindHours(hourFirstSelected, hourFinishSelected , FilterByHoursSelected) {

    //   FilterByHoursSelected.forEach((e) => {
    //     console.log('e', e.hourFirst, e.HourFinish)
    //     console.log('e', hourFirstSelected, hourFinishSelected)

    //     if (e.hourFirst >= hourFirstSelected && e.HourFinish <= hourFinishSelected) {
    //       e.avalibeStatus = false
    //     }
    //   })

    //   return FilterByHoursSelected
    // }


    // function FilterHoursByDoctorSelected(nameDoctor, ArrayGet) {
    //   const HoursByDoctor = ArrayGet.filter(e => e.Doctor === nameDoctor)

    //   return HoursByDoctor
    // }
  }

