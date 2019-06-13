/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project knex-pg
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */
import {map, get, isFunction, reduce, each, capitalize, toLower, merge,fromPairs, forOwn} from 'lodash/fp'
import {CreatePlugin} from "@pomegranate/plugin-tools";


export const Plugin = CreatePlugin('anything')
  .variables({
    connection: {
      user: null,
      host: 'localhost',
      password: null,
      database: null
    },
    pool: {
      min: 1,
      max: 5
    },
    debug: false
  })
  .configuration({
    name: 'KnexPG',
    injectableParam: 'KnexConfig',
    applicationMember: ['Knex'],
  })
  .hooks({
    load: async (Injector, PluginVariables, PluginFiles, PluginLogger) => {

      const actualOptions = merge({client: 'pg'}, PluginVariables)
      PluginLogger.log('PG client configured.')
      return actualOptions
    }
  })
