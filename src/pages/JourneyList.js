import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetJourneys } from '../redux/oBilet/action'
import JourneyCard from '../components/JourneyCard'
import Vehicles from '../components/Vehicles'
import SearchBar from '../components/search/SearchBar'
import { Card } from 'reactstrap'

const JourneyList = () => {
    const { originId, destinationId, departureDate } = useParams()


    const { journeys } = useSelector(state => state.oBiletReducer)

    const dispatch = useDispatch()
    const sessionData = JSON.parse(localStorage.getItem('localStorageData'));

    useEffect(() => {
        let data = {
            "device-session": {
                "session-id": sessionData.sessionId,
                "device-id": sessionData.deviceId
            },
            "date": "2022-06-14",
            "language": "tr-TR",
            "data": {
                "origin-id": `${originId}`,
                "destination-id": `${destinationId}`,
                "departure-date": `${departureDate}`
            }
        }
        dispatch(GetJourneys(data))
    }, [])
    const from = JSON.parse(localStorage.getItem("from"))
    const to = JSON.parse(localStorage.getItem("to"))
    return (
        <div>
            <Vehicles />
            <SearchBar/>
            {
                journeys?.data?.length === 0 ?
                    <Card style={{ display: 'flex', alignItems: 'center' }}>                   
                        {`${from.label} - ${to.label} arasında otobüs seferi bulunamamaktadır. Dilerseniz farklı bir tarih seçerek tekrar deneyebilirsiniz`}
                    </Card>
                    :
                    journeys?.data?.map((item, key) => (
                        <JourneyCard key={key} item={item} />
                    ))
            }
        </div>
    )
}

export default JourneyList