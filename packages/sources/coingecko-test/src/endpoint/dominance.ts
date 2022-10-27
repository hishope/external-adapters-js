import { AdapterEndpoint } from '@chainlink/external-adapter-framework/adapter'
import { HttpRequestConfig } from '@chainlink/external-adapter-framework/transports'
import { BatchWarmingTransport } from '@chainlink/external-adapter-framework/transports/batch-warming'
import { ProviderResult } from '@chainlink/external-adapter-framework/util'
import {
  buildGlobalRequestBody,
  constructEntry,
  GlobalEndpointTypes,
  inputParameters,
} from '../global-utils'

const batchEndpointTransport = new BatchWarmingTransport<GlobalEndpointTypes>({
  prepareRequest: (_, config): HttpRequestConfig<never> => {
    return buildGlobalRequestBody(config.API_KEY)
  },
  parseResponse: (params, res): ProviderResult<GlobalEndpointTypes>[] => {
    const entries = [] as ProviderResult<GlobalEndpointTypes>[]
    for (const requestPayload of params) {
      const entry = constructEntry(res, requestPayload, 'market_cap_percentage')
      if (entry) {
        entries.push(entry)
      }
    }
    return entries
  },
})

export const endpoint = new AdapterEndpoint({
  name: 'dominance',
  aliases: ['market_cap_percentage'],
  transport: batchEndpointTransport,
  inputParameters,
})