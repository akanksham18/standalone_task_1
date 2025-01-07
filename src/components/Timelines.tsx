import { CycleStatusTimeline, DowntimeTimeline } from './index';

const Timelines = () => {
  return (
    <div className="py-8">
        <span className=''>Machine 01</span>
        <CycleStatusTimeline/>
        <DowntimeTimeline/>
    </div>
  )
}

export default Timelines