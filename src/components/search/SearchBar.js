import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, FormGroup, Input, Label, NavItem, Row } from 'reactstrap'
import { Calendar, MapPin } from 'react-feather'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'
import { IoSwapHorizontal } from "react-icons/io5"
import '../../assets/css/SearchBar.css'
import { FaEdit } from 'react-icons/fa'

const SearchBar = () => {

  const { handleSubmit, register, control } = useForm();
  const onSubmit = (data) => {
    console.log("datam", data)
  }

  const dispatch = useDispatch()
  const { session, locationList } = useSelector(state => state.oBiletReducer)

  const convertDate = (date) => {
    return date.toJSON().split('T')[0];
  }

  var now = new Date();
  var today = convertDate(now);
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow = convertDate(tomorrow);

  const [from, setfrom] = useState(JSON.parse(localStorage.getItem("from")) || { value: 349, label: "İstanbul Avrupa" })
  const [to, setto] = useState(JSON.parse(localStorage.getItem("to")) || { value: 356, label: "Ankara" })
  const [departureDate, setdepartureDate] = useState(today)

  const swapLocation = () => {
    const temp = from
    setfrom(to)
    setto(temp)
  }

  const cityOptions = []
  locationList?.map((item) => {
    const city = { value: item.id, label: item.name }
    cityOptions.push(city)
  })

  return (
    <div className='search'>
      <div className='container'>
        <Form className='p-3' onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', width: '70%', display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
          <FormGroup className='inputFormGroup m-1' style={{ display: 'flex', alignItems: 'center', height: '85%' }}>
            <MapPin color='gray' style={{ display: 'flex', alignItems: 'center' }} />
            <Controller style={{ width: '100%', backgroundColor: '#6c757d', color: 'white' }}
              control={control}
              name="from"
              render={({
              }) => (
                <Select style={{ justifyContent: 'center', width: "100%", height: '100%', backgroundColor: '#6c757d', color: 'white' }}
                  options={cityOptions}
                  placeholder="İl veya ilçe adı yazın"
                  innerRef={register()}
                  onChange={(e) => { if (e.value === to.value) { setfrom(to); setto(from) } else { setfrom(e) } }}
                  value={from}
                />
              )}
            />
          </FormGroup>
          <FormGroup className='m-1' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85%' }}>
            <Button style={{ fontSize: 'small', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#5d686e', border: 'none' }}>
              <IoSwapHorizontal onClick={() => { swapLocation() }} style={{ cursor: 'pointer' }} />
            </Button>
          </FormGroup>
          <FormGroup className='inputFormGroup m-1' style={{ display: 'flex', alignItems: 'center', height: '85%' }}>
            <MapPin color='gray' />
            <Controller style={{ width: '100%', backgroundColor: '#6c757d', color: 'white' }}
              control={control}
              name="to"
              render={({
              }) => (
                <Select style={{ justifyContent: 'center', width: "100%" }}
                  options={cityOptions}
                  value={to}
                  innerRef={register()}
                  placeholder="İl veya ilçe adı yazın"
                  onChange={(e) => { if (e.value === from.value) { setto(from); setfrom(to) } else { setto(e) } }}
                />
              )}
            />
          </FormGroup>
          <FormGroup className='m-1' style={{ display: 'flex', alignItems: 'center', height: '85%' }}>
            <Button style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#6c757d', width: '12%' }}>
              {'<'}
            </Button>
            <Input className='border-0 calen' style={{ backgroundColor: '#6c757d', color: 'white' }}
              id="journeyDate"
              name="journeyDate"
              placeholder="Tarih seçin"
              innerRef={register()}
              type="date"
              onChange={(e) => setdepartureDate(e.target.value)}
              defaultValue={today}
              value={departureDate}
            ></Input>
            <Button style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#6c757d', width: '12%' }}>
              {'>'}
            </Button>
          </FormGroup>
          <FormGroup className='m-1' style={{ display: 'flex', alignItems: 'center', height: '85%' }}>
            <Button style={{ fontSize: 'small', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#6c757d' }}>
              <span className='m-1'>Aramayı Düzenle</span> <FaEdit />
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  )
}

export default SearchBar