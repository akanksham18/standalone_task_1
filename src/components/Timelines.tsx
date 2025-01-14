import { CycleStatusTimeline, DowntimeTimeline } from './index';

const Timelines = () => {
  return (
    <div className="shadow-custom bg-[#FFFFFF] rounded-[15px] my-6 w-[52vw]">
        <span className='text-xl font-semibold px-4'>Machine 01</span>
        <CycleStatusTimeline/>
        <DowntimeTimeline/>
        <DowntimeTimeline/>
    </div>
  )
}

export default Timelines