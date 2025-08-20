export interface ScheduleItem {
  id: string;
  type: 'ceremony' | 'speaker';
  title: string;
  speaker?: {
    name: string;
    designation: string;
    imageSrc: string;
  };
  startTime: string;
  endTime: string;
  duration: string;
  description?: string;
}

export const scheduleData: ScheduleItem[] = [
  {
    id: "inauguration",
    type: "ceremony",
    title: "Inauguration Ceremony",
    startTime: "10:30 AM",
    endTime: "11:00 AM",
    duration: "30 minutes",
    description: "Opening ceremony and welcome address for TEDx IEM Salt Lake"
  },
  {
    id: "jimmy-tangree",
    type: "speaker",
    title: "Jimmy Tangree",
    speaker: {
      name: "Jimmy Tangree",
      designation: "Head, 91.9 Friends FM",
      imageSrc: "/images/CoreTeam/jimmy.jpg"
    },
    startTime: "11:00 AM",
    endTime: "11:18 AM",
    duration: "18 minutes"
  },
  {
    id: "ankush-hazra",
    type: "speaker",
    title: "Ankush Hazra",
    speaker: {
      name: "Ankush Hazra",
      designation: "Actor",
      imageSrc: "/images/CoreTeam/ankush.jpg"
    },
    startTime: "11:25 AM",
    endTime: "11:43 AM",
    duration: "18 minutes"
  },
  {
    id: "debashish-bhattacharya",
    type: "speaker",
    title: "Debashish Bhattacharya",
    speaker: {
      name: "Debashish Bhattacharya",
      designation: "Indian classical slide guitarist",
      imageSrc: "/images/CoreTeam/debashish.jpg"
    },
    startTime: "11:50 AM",
    endTime: "12:08 PM",
    duration: "18 minutes"
  },
  {
    id: "ashoke-viswanathan",
    type: "speaker",
    title: "Ashoke Viswanathan",
    speaker: {
      name: "Ashoke Viswanathan",
      designation: "Filmmaker",
      imageSrc: "/images/CoreTeam/ashoke.jpg"
    },
    startTime: "12:15 PM",
    endTime: "12:33 PM",
    duration: "18 minutes"
  },
  {
    id: "ritabhari-chakraborty",
    type: "speaker",
    title: "Ritabhari Chakraborty",
    speaker: {
      name: "Ritabhari Chakraborty",
      designation: "Actress",
      imageSrc: "/images/CoreTeam/ritabhari.jpg"
    },
    startTime: "12:40 PM",
    endTime: "12:58 PM",
    duration: "18 minutes"
  },
  {
    id: "rwitobroto-mukherjee",
    type: "speaker",
    title: "Rwitobroto Mukherjee",
    speaker: {
      name: "Rwitobroto Mukherjee",
      designation: "Actor",
      imageSrc: "/images/CoreTeam/rwitobroto.jpg"
    },
    startTime: "1:05 PM",
    endTime: "1:23 PM",
    duration: "18 minutes"
  },
  {
    id: "vote-of-thanks",
    type: "ceremony",
    title: "Vote of Thanks",
    startTime: "1:25 PM",
    endTime: "1:40 PM",
    duration: "15 minutes",
    description: "Closing ceremony and vote of thanks for TEDx IEM Salt Lake"
  }
];

export const eventInfo = {
  eventName: "TEDx IEM Salt Lake",
  date: "22 August 2025",
  venue: "IEM Salt Lake Campus",
  theme: "Ideas Worth Spreading"
};
