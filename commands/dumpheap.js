const { PublicError } = require('monochrome-bot');

let heapDump;
try {
  // eslint-disable-next-line import/no-unresolved,global-require
  heapDump = require('heapdump');
} catch (err) {
  // It's just a dev tool
}

/**
* Write a heap dump to disk.
*/
module.exports = {
  commandAliases: ['dumpheap'],
  botAdminOnly: true,
  shortDescription: 'Dump a snapshot of the heap to the disk, for debugging purposes.',
  usageExample: '<prefix>dumpheap outputfilename',
  uniqueId: 'dumpheap',
  action(bot, msg, suffix) {
    if (!heapDump) {
      throw PublicError.createWithCustomPublicMessage('Module \'heapdump\' not found. You have to install heapdump to use this command. npm install heapdump', false, 'No heapdump module');
    }

    const snapshotName = suffix ? `${suffix}.heapsnapshot` : undefined;
    heapDump.writeSnapshot(snapshotName, (err, filename) => {
      if (err) {
        msg.channel.createMessage(`Error creating heap dump: ${err}`);
      } else {
        msg.channel.createMessage(`Heap dump written to file: ${filename}. You can inspect it with Chrome developer tools.`);
      }
    });
  },
};
