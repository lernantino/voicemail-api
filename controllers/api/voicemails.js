const router = require('express').Router();
const { Voicemail } = require('../../models');
const { formatText, formatPhone, formatDuration, formatDate } = require('../../utils/format');

router.get('/', async (req, res) => {
    try {
      const { rows } = await Voicemail.getAll();
  
      // format each voicemail object before returning response
      const vms = rows.map((vm) => {
        return {
          ...vm,
          transcript: formatText(vm.transcript),
          duration: formatDuration(vm.duration),
          phone: formatPhone(vm.phone),
          date: formatDate(new Date(vm.date).getTime())
        };
      });
  
      res.json(vms);
    }
    catch(err) {
      console.error(err);
      res.status(500).end();
    }
});

  router.delete('/:id', async (req, res) => {
    try {
      const { rowCount } = await Voicemail.delete(req.params.id);
    
      res.status(rowCount === 0 ? 404 : 204).end();
    }
    catch(err) {
      console.error(err);
      res.status(500).end();
    }
});

module.exports = router;
