function ready(fn) {
  if (document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

grist.ready({
    requiredAccess: 'read table'
  });

grist.onOptions(function(options, interaction) {
  console.log(interaction.access_level);
});

grist.onRecord(function (record) {
    document.getElementById('section-title').innerText = record.Print_Major_Section_Name;
    document.getElementById('image').src = record.Link;
  });

const data = {
  count: 0,
  section: '',
  status: 'waiting',
  tableConnected: false,
  rowConnected: false,
  haveRows: false,
};
let app = undefined;

app = new Vue({
    el: '#app',
    data: data
  });
