

export default (event, context) => {

  const { hourFirstSelected, hourFinishSelected, doctorSelected } = event.input


  const CreateHoursForHours = []


  let nameDoctor = 'Bastian Ahumada'
  let specialty = 'Veterinarian'
  let dayOfWork = [['lunes', 3], ['martes', 5], ['miercoles', 4], ['jueves', 4], ['viernes', 2], ['sabado', 2]]
  let hoursForDays = [3, 5, 6, 8, 9, 3] // Not Work Yet
  let weeksForMonths = 2
  let Months = [['abril', 2], ['mayo', 4], ['Junio', 4]]


  let hoursAvailibeFromDoctor = []

  
  class DistributedHours {
    public functDistributedHours() {
      
    }
  }


  for (let m = 0; m < Months.length; m++) {
    const MonthsCurrently = Months[m]
    console.log('MonthsCurrently', MonthsCurrently[1])
    for (let w = 0; w < MonthsCurrently[1]; w++) {
      console.log('w', w, MonthsCurrently)  //Week For Month
      for (let i = 0; i < dayOfWork.length; i++) {
        const element = dayOfWork[i];
        const Item = {
          Months: MonthsCurrently[0],
          week: w + 1,
          Day: element[0],
          Hours: element[1],
          nameDoctor: nameDoctor,
          specialty: specialty,
          status: false
        }

      hoursAvailibeFromDoctor.push(Item)

      }


    }

    console.log('hoursAvailibeFromDoctor', hoursAvailibeFromDoctor)

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
}