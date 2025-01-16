import { CycleStatusTimeline, DowntimeTimeline } from './index';

const Timelines = () => {
  return (
    <div className="h-full flex flex-col shadow-custom rounded-[15px] w-[52vw]">
      <div className="title flex items-center mt-6">
        <span className='text-xl font-semibold px-4'>Machine 01</span>
      </div>
      <div className="charts flex flex-col justify-between flex-grow">
        <CycleStatusTimeline />
        <DowntimeTimeline />
        <DowntimeTimeline />
      </div>
    </div>
  )
}

export default Timelines