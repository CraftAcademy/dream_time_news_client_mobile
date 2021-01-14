import { cleanup, init } from "detox";
import { reloadApp } from "detox-expo-helpers";
import adapter from "detox/runners/jest/adapter";    

jest.setTimeout(120000)
jasmine.getEnv().addReporter(adapter)

beforeAll(async () => {
await init()
})

beforeEach(async () => {
  await adapter.beforeEach()
  await reloadApp()
})

afterAll(async () => {
  await adapter.afterAll
  await cleanup()
})