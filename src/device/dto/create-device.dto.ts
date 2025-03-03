export class CreateDeviceDto {
  userId:      number
  device_type: string
  device_name: string
  ip_address:  string
  last_active: boolean
}