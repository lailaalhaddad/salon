import { action, makeObservable, observable, makeAutoObservable } from "mobx";
import schedules from "../schedules";
// import axios from "axios";

class ScheduleStore {
  schedules = schedules;
  constructor() {
    makeAutoObservable(this);
  }

  //   fetchSchedule = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000/??");
  //       this.schedules = response.data;
  //     } catch (error) {
  //       console.error("fetchSchedule  -> response", error);
  //     }
  //   };

  //   UpdateSchedule = async () => {
  //     try {
  //       const response = await axios.put("http://localhost:8000/??");
  //       this.schedules = response.data;
  //     } catch (error) {
  //       console.error("UpdateSchedule  -> response", error);
  //     }
  //   };

  // addSchedule = (data) => {
  //   let newSchedule = data;
  //   newSchedule.id = this.schedules.length + 1;
  //   console.log(newSchedule);
  //   this.schedules.push(newSchedulet);
  // };

  removeSchedule = (scheduleId) => {
    this.schedules = this.schedules.filter(
      (schedule) => schedule.id !== scheduleId
    );
  };
}

const scheduleStore = new ScheduleStore();

// scheduleStore.fetchSchedule();
// scheduleStore.UpdateSchedule();
export default scheduleStore;
