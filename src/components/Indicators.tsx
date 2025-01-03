import Idle from "./Idle"
import LockUnlock from "./LockUnlock"
import Oee from "./Oee"
import Production from "./Production"

const Indicators = () => {
    return (
        <div className="flex h-[80px] gap-8 left-[26px] top-[89px] rounded-[15px_0px_0px_0px] px-page-px my-10">
            <Oee />
            <Production />
            <Idle />
            <LockUnlock />
        </div>
    )
}

export default Indicators
