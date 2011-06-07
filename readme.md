Bitcoin JavaScript Miner
========================

**Current Status**: Alpha


What is it?
-----------

This is a Bitcoin Miner implemented in JavaScript. It is intended for use
in a [Bitcoin Mining Pool](https://en.bitcoin.it/wiki/Pooled_mining), but
its main purpose is to act as a learning tool. Feel free to browse the commented source-code
and learn more about how Bitcoins are mined.

[Learn more about Bitcoin](http://www.bitcoin.org/ "Bitcoin")


How do I use it?
----------------

Download the full source code, edit the bitcoind-server.php file with your serever, username, and password, and upload it to any webserver. You can then
access the index.html file and begin mining!


Does It Really Mine Bitcoins?
-----------------------------

Yes, though it isn't very good at mining! It operates much slower
than even a standard CPU miner, and so it is unlikely to generate much income. However it can be loaded on a website so your visitors can calculate bitcoins for you.


Current Development Status
--------------------------

JsMiner has been tested on a local bitcoin server (bitcoind -daemon) and with the bitcoinpool.com pool.

JsMiner is also an educational tool. It's hashing function hasn't been  100% verified for correct operation so don't be too surprised if it doesn't work properly.

File Desctriptions
------------------

This is a list of the files and what they do:

* **index.html** - The webpage for JsMiner. Provides an interface to process and view mining statistics.
* **miner.js** - This is where the Bitcoin Mining is done. It is invoked as a Web Worker (JavaScript thread).
* **sha256.js** - SHA-256 functions implemented in JavaScript.
* **work-manager.js** - Code to getwork, submitwork, and manage the Miner threads.
* **bitcoind-server.php** - Connection info for connecting to a bitcoin pool / server.
* **getwork.php** - Feeds up a getwork request in JSON format for easy processing by the javascript
* **submitwork.php** - accepts a solution in a POST request and submits it to the server for verification and cashing in.


Thank You
---------

If you like this project, feel free contribute code, comments, and even Bitcoin donations.

*Donation Address for cmaclell*: 19ZhyDExua1b6ZzMMfvPdGpQTRnjkWZTYj
*Donation Address for kr105rlz*: 16TUsJ6ToAxp1a9RmTCGnox99MocGSYLaD

