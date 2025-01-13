import { CycleStatusTimeline, DowntimeTimeline } from './index';

const Timelines = () => {
  return (
    <div className="py-2 px-14 shadow-custom bg-[#FFFFFF] rounded-[15px] mt-8">
        <span className='text-xl font-semibold'>Machine 01</span>
        <CycleStatusTimeline/>
        <DowntimeTimeline/>
        <DowntimeTimeline/>
    </div>
  )
}

export default Timelines