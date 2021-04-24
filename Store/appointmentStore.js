import { action, makeObservable, observable, makeAutoObservable } from "mobx";
import appointments from "../appointments";
// import axios from "axios";

class AppointmentStore {
  appointments = appointments;
  constructor() {
    makeAutoObservable(this);
  }

  //   fetchAppointment = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000/??");
  //       this.appointments = response.data;
  //     } catch (error) {
  //       console.error("fetchAppointment  -> response", error);
  //     }
  //   };

  /**
   *
   * WE NEED THE UPDATE FOR REJECT AND APPROVE METHODS
   */
  //   UpdateAppointment = async () => {
  //     try {
  //       const response = await axios.put("http://localhost:8000/??");
  //       this.appointments = response.data;
  //     } catch (error) {
  //       console.error("UpdateAppointment  -> response", error);
  //     }
  //   };

  addAppointment = (data) => {
    let newAppointment = data;
    newAppointment.id = this.appointments.length + 1;
    console.log(newAppointment);
    this.appointments.push(newAppointment);
  };

  removeAppointment = (appId) => {
    this.appointments = this.appointments.filter((app) => app.id !== appId);
  };
}

const appointmentStore = new AppointmentStore();

// appointmentStore.fetchAppointment();
// appointmentStore.UpdateAppointment();
export default appointmentStore;
