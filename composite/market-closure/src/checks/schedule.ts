import { MarketClosure, Schedule } from 'market-closure'
import { AdapterRequest } from '@chainlink/types'
import { Validator } from '@chainlink/external-adapter'

const customParams = {
  schedule: false,
}

export const isMarketClosedFactory = (input: AdapterRequest): (() => Promise<boolean>) => {
  const validator = new Validator(input, customParams)
  if (validator.error) throw validator.error
  const schedule = validator.validated.data.schedule || {}
  return async () => isMarketClosed(schedule as Schedule)
}

export const isMarketClosed = (schedule: Schedule): boolean => {
  if (Object.keys(schedule).length === 0) return false // Empty schedule, just pass

  // If there is no timezone, the schedule is mis-configured
  if (!schedule.timezone || schedule.timezone.length === 0)
    throw new Error('timezone missing in schedule')

  const marketSchedule = new MarketClosure(schedule as Schedule)
  return marketSchedule.tradingHalted()
}
