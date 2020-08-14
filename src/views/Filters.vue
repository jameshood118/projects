<template>
  <div class="container is-fluid">
    <breadcrumb />
    <section class="section">
      <div class="columns is-multiline">
        <div class="column is-full">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Format Number</p>
            </header>
            <div class="card-content">
              <pre>
              <code>
Vue.filter('formatNumber', (num, args) => {
    switch (args) {
    case 'abbreviate':
    return numeral(String(num)).format('0.0a')
    case 'thousands':
    return numeral(String(num)).format('0,0')
    case 'currency':
    return numeral(String(num)).format('$0,0[.]00')
    case 'percent':
    return numeral(String(num)).format('0%')
    default:
    return num
    }
    })
              </code>
                            </pre>
            </div>
          </div>
        </div>
        <div class="column is-full">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Date Formats (using momentTimezone)
              </p>
            </header>
            <div class="card-content">
              <pre>
              <code>

    Vue.filter('formatDate', (value, args) => {
  let timeZone = store.state.timeZone
  if (!timeZone) {
    timeZone = momentTimezone.tz.guess(true)
  }
  if (value) {
    switch (args) {
      case 'displayTime':
        return momentTimezone.tz(value, timeZone).format('hh:mm a')
      case 'milDateTime':
        return momentTimezone.tz(value, timeZone).format('DD MMM YY HH:mm (Z)')
      case 'longDatePicker':
        return (
          momentTimezone.tz(value, timeZone).format('MMMM DD, YYYY HH:mm') +
          ' ' +
          '(' +
          moment(value).toISOString() +
          ')'
        )
      case 'shortDatePicker':
        return momentTimezone.tz(value, timeZone).format('DD MMM YY')
      case 'milTimeDate':
        return momentTimezone.tz(value, timeZone).format('HH:mm (Z) DD MMM YY')
      case 'milDate':
        return momentTimezone.tz(value, timeZone).format('DD MMM YY')
      case 'shortDate':
        return momentTimezone.tz(value, timeZone).format('MMM Do, YYYY')
      case 'shortDateTime':
        return momentTimezone
          .tz(value, timeZone)
          .format('DD MMM [at] HH:mm (Z)')
      case 'monthDay':
        return momentTimezone.tz(value, timeZone).format('MMM Do')
      case 'convertDate':
        return (
          momentTimezone.tz(value, timeZone).fromNow() +
          ' at ' +
          momentTimezone.tz(value, timeZone).format('MMM Do YYYY HH:mm (Z)')
        )
      case 'fromNow':
        return momentTimezone.tz(value, timeZone).fromNow()
      case 'dtg':
        return momentTimezone.tz(value, timeZone).format('DD MMM YY - HHmm (z)')
      default:
        return momentTimezone.tz(value, timeZone)
    }
  }
})

              </code>
                                </pre>
            </div>
          </div>
        </div>
        <div class="column is-full">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Quick Truncate</p>
            </header>
            <div class="card-content">
              <pre>
              <code>

Vue.filter('truncate', (body, length) => {
  let ending = '...'
  if (body && body.length > length) {
    return body.substring(0, length - ending.length) + ending
  } else {
    return body
  }
})

              </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'filters'
}
</script>

<style lang="scss" scoped></style>
