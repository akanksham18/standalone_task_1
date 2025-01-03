import Idle from "./Idle"
import LockUnlock from "./LockUnlock"
import Oee from "./Oee"
import Production from "./Production"

const Indicators = () => {
    return (
        <div className="flex w-[712px] h-[80px] gap-0 left-[26px] top-[89px] rounded-[15px_0px_0px_0px]">
            <Oee />
            <Production />
            <Idle />
            <LockUnlock />
        </div>
    )
}

export default Indicators
