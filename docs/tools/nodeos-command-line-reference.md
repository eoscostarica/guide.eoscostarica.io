---
id: nodeos-command-line-reference
title: Nodeos Configuration Options
sidebar_label: Nodeos Command Line Reference
description: Options to configure the nodeos.
keywords: [ Nodeos Command Line Reference, Nodeos, EOS, EOS Costa Rica, What is Nodeos, Nodeos Configuration Options, Nodeos Configuration ]
---

## Nodeos Application Options:

### Config Options for eosio::chain_plugin:

```
  --blocks-dir arg (="blocks")          the location of the blocks directory 
                                        (absolute path or relative to 
                                        application data dir)
  
  --protocol-features-dir arg (="protocol_features")
                                        the location of the protocol_features 
                                        directory (absolute path or relative to
                                        application config dir)
  
  --checkpoint arg                      Pairs of [BLOCK_NUM,BLOCK_ID] that 
                                        should be enforced as checkpoints.
  
  --wasm-runtime runtime                Override default WASM runtime
  
  --abi-serializer-max-time-ms arg (=15)
                                        Override default maximum ABI 
                                        serialization time allowed in ms
  
  --chain-state-db-size-mb arg (=1024)  Maximum size (in MiB) of the chain 
                                        state database
  
  --chain-state-db-guard-size-mb arg (=128)
                                        Safely shut down node when free space 
                                        remaining in the chain state database 
                                        drops below this size (in MiB).
  
  --reversible-blocks-db-size-mb arg (=340)
                                        Maximum size (in MiB) of the reversible
                                        blocks database
  
  --reversible-blocks-db-guard-size-mb arg (=2)
                                        Safely shut down node when free space 
                                        remaining in the reverseible blocks 
                                        database drops below this size (in 
                                        MiB).
  
  --signature-cpu-billable-pct arg (=50)
                                        Percentage of actual signature recovery
                                        cpu to bill. Whole number percentages, 
                                        e.g. 50 for 50%
  
  --chain-threads arg (=2)              Number of worker threads in controller 
                                        thread pool
  
  --contracts-console                   print contract's output to console
  
  --actor-whitelist arg                 Account added to actor whitelist (may 
                                        specify multiple times)
  
  --actor-blacklist arg                 Account added to actor blacklist (may 
                                        specify multiple times)
  
  --contract-whitelist arg              Contract account added to contract 
                                        whitelist (may specify multiple times)
  
  --contract-blacklist arg              Contract account added to contract 
                                        blacklist (may specify multiple times)
  
  --action-blacklist arg                Action (in the form code::action) added
                                        to action blacklist (may specify 
                                        multiple times)
  
  --key-blacklist arg                   Public key added to blacklist of keys 
                                        that should not be included in 
                                        authorities (may specify multiple 
                                        times)
  
  --sender-bypass-whiteblacklist arg    Deferred transactions sent by accounts 
                                        in this list do not have any of the 
                                        subjective whitelist/blacklist checks 
                                        applied to them (may specify multiple 
                                        times)
  
  --read-mode arg (=speculative)        Database read mode ("speculative", 
                                        "head", "read-only", "irreversible").
                                        In "speculative" mode: database 
                                        contains state changes by transactions 
                                        in the blockchain up to the head block 
                                        as well as some transactions not yet 
                                        included in the blockchain.
                                        In "head" mode: database contains state
                                        changes by only transactions in the 
                                        blockchain up to the head block; 
                                        transactions received by the node are 
                                        relayed if valid.
                                        In "read-only" mode: (DEPRECATED: see 
                                        p2p-accept-transactions & 
                                        api-accept-transactions) database 
                                        contains state changes by only 
                                        transactions in the blockchain up to 
                                        the head block; transactions received 
                                        via the P2P network are not relayed and
                                        transactions cannot be pushed via the 
                                        chain API.
                                        In "irreversible" mode: database 
                                        contains state changes by only 
                                        transactions in the blockchain up to 
                                        the last irreversible block; 
                                        transactions received via the P2P 
                                        network are not relayed and 
                                        transactions cannot be pushed via the 
                                        chain API.
                                        
  --api-accept-transactions arg (=1)    Allow API transactions to be evaluated 
                                        and relayed if valid.
  
  --validation-mode arg (=full)         Chain validation mode ("full" or 
                                        "light").
                                        In "full" mode all incoming blocks will
                                        be fully validated.
                                        In "light" mode all incoming blocks 
                                        headers will be fully validated; 
                                        transactions in those validated blocks 
                                        will be trusted 
                                        
  --disable-ram-billing-notify-checks   Disable the check which subjectively 
                                        fails a transaction if a contract bills
                                        more RAM to another account within the 
                                        context of a notification handler (i.e.
                                        when the receiver is not the code of 
                                        the action).
  
  --maximum-variable-signature-length arg (=16384)
                                        Subjectively limit the maximum length 
                                        of variable components in a variable 
                                        legnth signature to this size in bytes
  
  --trusted-producer arg                Indicate a producer whose blocks 
                                        headers signed by it will be fully 
                                        validated, but transactions in those 
                                        validated blocks will be trusted.
  
  --database-map-mode arg (=mapped)     Database map mode ("mapped", "heap", or
                                        "locked").
                                        In "mapped" mode database is memory 
                                        mapped as a file.
                                        In "heap" mode database is preloaded in
                                        to swappable memory.
                                        In "locked" mode database is preloaded 
                                        and locked in to memory.
```                                     

### Command Line Options for eosio::chain_plugin:

```
  --genesis-json arg                    File to read Genesis State from
  
  --genesis-timestamp arg               override the initial timestamp in the 
                                        Genesis State file
  
  --print-genesis-json                  extract genesis_state from blocks.log 
                                        as JSON, print to console, and exit
  
  --extract-genesis-json arg            extract genesis_state from blocks.log 
                                        as JSON, write into specified file, and
                                        exit
  
  --print-build-info                    print build environment information to 
                                        console as JSON and exit
  
  --extract-build-info arg              extract build environment information 
                                        as JSON, write into specified file, and
                                        exit
  
  --fix-reversible-blocks               recovers reversible block database if 
                                        that database is in a bad state
  
  --force-all-checks                    do not skip any checks that can be 
                                        skipped while replaying irreversible 
                                        blocks
  
  --disable-replay-opts                 disable optimizations that specifically
                                        target replay
  
  --replay-blockchain                   clear chain state database and replay 
                                        all blocks
  
  --hard-replay-blockchain              clear chain state database, recover as 
                                        many blocks as possible from the block 
                                        log, and then replay those blocks
  
  --delete-all-blocks                   clear chain state database and block 
                                        log
  
  --truncate-at-block arg (=0)          stop hard replay / block log recovery 
                                        at this block number (if set to 
                                        non-zero number)
  
  --import-reversible-blocks arg        replace reversible block database with 
                                        blocks imported from specified file and
                                        then exit
  
  --export-reversible-blocks arg        export reversible block database in 
                                        portable format into specified file and
                                        then exit
  
  --snapshot arg                        File to read Snapshot State from

```

### Config Options for eosio::history_plugin:

```

  -f [ --filter-on ] arg                Track actions which match 
                                        receiver:action:actor. Actor may be 
                                        blank to include all. Action and Actor 
                                        both blank allows all from Recieiver. 
                                        Receiver may not be blank.
  
  -F [ --filter-out ] arg               Do not track actions which match 
                                        receiver:action:actor. Action and Actor
                                        both blank excludes all from Reciever. 
                                        Actor blank excludes all from 
                                        reciever:action. Receiver may not be 
                                        blank.
```

### Config Options for eosio::http_client_plugin:

```
  --https-client-root-cert arg          PEM encoded trusted root certificate 
                                        (or path to file containing one) used 
                                        to validate any TLS connections made.  
                                        (may specify multiple times)
                                        
  --https-client-validate-peers arg (=1)
                                        true: validate that the peer 
                                        certificates are valid and trusted, 
                                        false: ignore cert errors
```

### Config Options for eosio::http_plugin:

```
  --unix-socket-path arg                The filename (relative to data-dir) to 
                                        create a unix socket for HTTP RPC; set 
                                        blank to disable.
  
  --http-server-address arg (=127.0.0.1:8888)
                                        The local IP and port to listen for 
                                        incoming http connections; set blank to
                                        disable.
  
  --https-server-address arg            The local IP and port to listen for 
                                        incoming https connections; leave blank
                                        to disable.
  
  --https-certificate-chain-file arg    Filename with the certificate chain to 
                                        present on https connections. PEM 
                                        format. Required for https.
  
  --https-private-key-file arg          Filename with https private key in PEM 
                                        format. Required for https
  
  --https-ecdh-curve arg (=secp384r1)   Configure https ECDH curve to use: 
                                        secp384r1 or prime256v1
  
  --access-control-allow-origin arg     Specify the Access-Control-Allow-Origin
                                        to be returned on each request.
  
  --access-control-allow-headers arg    Specify the Access-Control-Allow-Header
                                        s to be returned on each request.
  
  --access-control-max-age arg          Specify the Access-Control-Max-Age to 
                                        be returned on each request.
  
  --access-control-allow-credentials    Specify if Access-Control-Allow-Credent
                                        ials: true should be returned on each 
                                        request.
  
  --max-body-size arg (=1048576)        The maximum body size in bytes allowed 
                                        for incoming RPC requests
  
  --http-max-bytes-in-flight-mb arg (=500)
                                        Maximum size in megabytes http_plugin 
                                        should use for processing http 
                                        requests. 503 error response when 
                                        exceeded.
  
  --http-max-response-time-ms arg (=30) Maximum time for processing a request.
  
  --verbose-http-errors                 Append the error log to HTTP responses
  
  --http-validate-host arg (=1)         If set to false, then any incoming 
                                        "Host" header is considered valid
  
  --http-alias arg                      Additionaly acceptable values for the 
                                        "Host" header of incoming HTTP 
                                        requests, can be specified multiple 
                                        times.  Includes http/s_server_address 
                                        by default.
  
  --http-threads arg (=2)               Number of worker threads in http thread
                                        pool
```

### Config Options for eosio::login_plugin:

```
  --max-login-requests arg (=1000000)   The maximum number of pending login 
                                        requests
  
  --max-login-timeout arg (=60)         The maximum timeout for pending login 
                                        requests (in seconds)
```

### Config Options for eosio::mongo_db_plugin:

```

  -q [ --mongodb-queue-size ] arg (=1024)
                                        The target queue size between nodeos 
                                        and MongoDB plugin thread.
  
  --mongodb-abi-cache-size arg (=2048)  The maximum size of the abi cache for 
                                        serializing data.
  
  --mongodb-wipe                        Required with --replay-blockchain, 
                                        --hard-replay-blockchain, or 
                                        --delete-all-blocks to wipe mongo 
                                        db.This option required to prevent 
                                        accidental wipe of mongo db.
  
  --mongodb-block-start arg (=0)        If specified then only abi data pushed 
                                        to mongodb until specified block is 
                                        reached.
  
  -m [ --mongodb-uri ] arg              MongoDB URI connection string, see: 
                                        https://docs.mongodb.com/master/referen
                                        ce/connection-string/. If not specified
                                        then plugin is disabled. Default 
                                        database 'EOS' is used if not specified
                                        in URI. Example: mongodb://127.0.0.1:27
                                        017/EOS
  
  --mongodb-update-via-block-num arg (=0)
                                        Update blocks/block_state with latest 
                                        via block number so that duplicates are
                                        overwritten.
  
  --mongodb-store-blocks arg (=1)       Enables storing blocks in mongodb.
  
  --mongodb-store-block-states arg (=1) Enables storing block state in mongodb.
  
  --mongodb-store-transactions arg (=1) Enables storing transactions in 
                                        mongodb.
  
  --mongodb-store-transaction-traces arg (=1)
                                        Enables storing transaction traces in 
                                        mongodb.
  
  --mongodb-store-action-traces arg (=1)
                                        Enables storing action traces in 
                                        mongodb.
  
  --mongodb-expire-after-seconds arg (=0)
                                        Enables expiring data in mongodb after 
                                        a specified number of seconds.
  
  --mongodb-filter-on arg               Track actions which match 
                                        receiver:action:actor. Receiver, 
                                        Action, & Actor may be blank to include
                                        all. i.e. eosio:: or :transfer:  Use * 
                                        or leave unspecified to include all.
  
  --mongodb-filter-out arg              Do not track actions which match 
                                        receiver:action:actor. Receiver, 
                                        Action, & Actor may be blank to exclude
                                        all.
```

### Config Options for eosio::net_plugin:

```
  --p2p-listen-endpoint arg (=0.0.0.0:9876)
                                        The actual host:port used to listen for
                                        incoming p2p connections.
  
  --p2p-server-address arg              An externally accessible host:port for 
                                        identifying this node. Defaults to 
                                        p2p-listen-endpoint.
  
  --p2p-peer-address arg                The public endpoint of a peer node to 
                                        connect to. Use multiple 
                                        p2p-peer-address options as needed to 
                                        compose a network.
                                          Syntax: host:port[:<trx>|<blk>]
                                          The optional 'trx' and 'blk' 
                                        indicates to node that only 
                                        transactions 'trx' or blocks 'blk' 
                                        should be sent.  Examples:
                                            p2p.eos.io:9876
                                            p2p.trx.eos.io:9876:trx
                                            p2p.blk.eos.io:9876:blk
                                        
  --p2p-max-nodes-per-host arg (=1)     Maximum number of client nodes from any
                                        single IP address
  
  --p2p-accept-transactions arg (=1)    Allow transactions received over p2p 
                                        network to be evaluated and relayed if 
                                        valid.
  
  --agent-name arg (="EOS Test Agent")  The name supplied to identify this node
                                        amongst the peers.
  
  --allowed-connection arg (=any)       Can be 'any' or 'producers' or 
                                        'specified' or 'none'. If 'specified', 
                                        peer-key must be specified at least 
                                        once. If only 'producers', peer-key is 
                                        not required. 'producers' and 
                                        'specified' may be combined.
  
  --peer-key arg                        Optional public key of peer allowed to 
                                        connect.  May be used multiple times.
  
  --peer-private-key arg                Tuple of [PublicKey, WIF private key] 
                                        (may specify multiple times)
  
  --max-clients arg (=25)               Maximum number of clients from which 
                                        connections are accepted, use 0 for no 
                                        limit
  
  --connection-cleanup-period arg (=30) number of seconds to wait before 
                                        cleaning up dead connections
  
  --max-cleanup-time-msec arg (=10)     max connection cleanup time per cleanup
                                        call in millisec
  
  --net-threads arg (=2)                Number of worker threads in net_plugin 
                                        thread pool
  
  --sync-fetch-span arg (=100)          number of blocks to retrieve in a chunk
                                        from any individual peer during 
                                        synchronization
  
  --use-socket-read-watermark arg (=0)  Enable experimental socket read 
                                        watermark optimization
  
  --peer-log-format arg (=["${_name}" ${_ip}:${_port}])
                                        The string used to format peers when 
                                        logging messages about them.  Variables
                                        are escaped with ${<variable name>}.
                                        Available Variables:
                                           _name  self-reported name
                                        
                                           _id    self-reported ID (64 hex 
                                                  characters)
                                        
                                           _sid   first 8 characters of 
                                                  _peer.id
                                        
                                           _ip    remote IP address of peer
                                        
                                           _port  remote port number of peer
                                        
                                           _lip   local IP address connected to
                                                  peer
                                        
                                           _lport local port number connected 
                                                  to peer
                                        
                                        
```

### Config Options for eosio::producer_plugin:

```
  -e [ --enable-stale-production ]      Enable block production, even if the 
                                        chain is stale.
  
  -x [ --pause-on-startup ]             Start this node in a state where 
                                        production is paused
  
  --max-transaction-time arg (=30)      Limits the maximum time (in 
                                        milliseconds) that is allowed a pushed 
                                        transaction's code to execute before 
                                        being considered invalid
  
  --max-irreversible-block-age arg (=-1)
                                        Limits the maximum age (in seconds) of 
                                        the DPOS Irreversible Block for a chain
                                        this node will produce blocks on (use 
                                        negative value to indicate unlimited)
  
  -p [ --producer-name ] arg            ID of producer controlled by this node 
                                        (e.g. inita; may specify multiple 
                                        times)
  
  --private-key arg                     (DEPRECATED - Use signature-provider 
                                        instead) Tuple of [public key, WIF 
                                        private key] (may specify multiple 
                                        times)
  --signature-provider arg (=EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV=KEY:5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3)
                                        Key=Value pairs in the form 
                                        <public-key>=<provider-spec>
                                        Where:
                                           <public-key>    is a string form of 
                                                           a vaild EOSIO public
                                                           key
                                        
                                           <provider-spec> is a string in the 
                                                           form <provider-type>
                                                           :<data>
                                        
                                           <provider-type> is KEY, or KEOSD
                                        
                                           KEY:<data>      is a string form of 
                                                           a valid EOSIO 
                                                           private key which 
                                                           maps to the provided
                                                           public key
                                        
                                           KEOSD:<data>    is the URL where 
                                                           keosd is available 
                                                           and the approptiate 
                                                           wallet(s) are 
                                                           unlocked
  
  --keosd-provider-timeout arg (=5)     Limits the maximum time (in 
                                        milliseconds) that is allowed for 
                                        sending blocks to a keosd provider for 
                                        signing
  
  --greylist-account arg                account that can not access to extended
                                        CPU/NET virtual resources
  
  --greylist-limit arg (=1000)          Limit (between 1 and 1000) on the 
                                        multiple that CPU/NET virtual resources
                                        can extend during low usage (only 
                                        enforced subjectively; use 1000 to not 
                                        enforce any limit)
  
  --produce-time-offset-us arg (=0)     Offset of non last block producing time
                                        in microseconds. Valid range 0 .. 
                                        -block_time_interval.
  
  --last-block-time-offset-us arg (=-200000)
                                        Offset of last block producing time in 
                                        microseconds. Valid range 0 .. 
                                        -block_time_interval.
  
  --cpu-effort-percent arg (=80)        Percentage of cpu block production time
                                        used to produce block. Whole number 
                                        percentages, e.g. 80 for 80%
  
  --last-block-cpu-effort-percent arg (=80)
                                        Percentage of cpu block production time
                                        used to produce last block. Whole 
                                        number percentages, e.g. 80 for 80%
  
  --max-block-cpu-usage-threshold-us arg (=5000)
                                        Threshold of CPU block production to 
                                        consider block full; when within 
                                        threshold of max-block-cpu-usage block 
                                        can be produced immediately
  
  --max-block-net-usage-threshold-bytes arg (=1024)
                                        Threshold of NET block production to 
                                        consider block full; when within 
                                        threshold of max-block-net-usage block 
                                        can be produced immediately
  
  --max-scheduled-transaction-time-per-block-ms arg (=100)
                                        Maximum wall-clock time, in 
                                        milliseconds, spent retiring scheduled 
                                        transactions in any block before 
                                        returning to normal transaction 
                                        processing.
  
  --subjective-cpu-leeway-us arg (=31000)
                                        Time in microseconds allowed for a 
                                        transaction that starts with 
                                        insufficient CPU quota to complete and 
                                        cover its CPU usage.
  
  --incoming-defer-ratio arg (=1)       ratio between incoming transactions and
                                        deferred transactions when both are 
                                        queued for execution
  
  --incoming-transaction-queue-size-mb arg (=1024)
                                        Maximum size (in MiB) of the incoming 
                                        transaction queue. Exceeding this value
                                        will subjectively drop transaction with
                                        resource exhaustion.
  
  --producer-threads arg (=2)           Number of worker threads in producer 
                                        thread pool
  
  --snapshots-dir arg (="snapshots")    the location of the snapshots directory
                                        (absolute path or relative to 
                                        application data dir)

```

### Config Options for eosio::state_history_plugin:

```

  --state-history-dir arg (="state-history")
                                        the location of the state-history 
                                        directory (absolute path or relative to
                                        application data dir)
  
  --trace-history                       enable trace history
  
  --chain-state-history                 enable chain state history
  
  --state-history-endpoint arg (=127.0.0.1:8080)
                                        the endpoint upon which to listen for 
                                        incoming connections. Caution: only 
                                        expose this port to your internal 
                                        network.
  
  --trace-history-debug-mode            enable debug mode for trace history
```


### Command Line Options for eosio::state_history_plugin:
 
``` 
  --delete-state-history                clear state history files
```

### Config Options for eosio::trace_api_plugin:

```
  --trace-dir arg (="traces")           the location of the trace directory 
                                        (absolute path or relative to 
                                        application data dir)
  
  --trace-slice-stride arg (=10000)     the number of blocks each "slice" of 
                                        trace data will contain on the 
                                        filesystem
  
  --trace-minimum-irreversible-history-blocks arg (=-1)
                                        Number of blocks to ensure are kept 
                                        past LIB for retrieval before "slice" 
                                        files can be automatically removed.
                                        A value of -1 indicates that automatic 
                                        removal of "slice" files will be turned
                                        off.
  
  --trace-minimum-uncompressed-irreversible-history-blocks arg (=-1)
                                        Number of blocks to ensure are 
                                        uncompressed past LIB. Compressed 
                                        "slice" files are still accessible but 
                                        may carry a performance loss on 
                                        retrieval
                                        A value of -1 indicates that automatic 
                                        compression of "slice" files will be 
                                        turned off.
  
  --trace-rpc-abi arg                   ABIs used when decoding trace RPC 
                                        responses.
                                        There must be at least one ABI 
                                        specified OR the flag trace-no-abis 
                                        must be used.
                                        ABIs are specified as "Key=Value" pairs
                                        in the form <account-name>=<abi-def>
                                        Where <abi-def> can be:
                                           an absolute path to a file 
                                        containing a valid JSON-encoded ABI
                                           a relative path from `data-dir` to a
                                        file containing a valid JSON-encoded 
                                        ABI
                                        
  --trace-no-abis                       Use to indicate that the RPC responses 
                                        will not use ABIs.
                                        Failure to specify this option when 
                                        there are no trace-rpc-abi 
                                        configuations will result in an Error.
                                        This option is mutually exclusive with 
                                        trace-rpc-api

```

### Config Options for eosio::txn_test_gen_plugin:

```
  --txn-reference-block-lag arg (=0)    Lag in number of blocks from the head 
                                        block when selecting the reference 
                                        block for transactions (-1 means Last 
                                        Irreversible Block)
  
  --txn-test-gen-threads arg (=2)       Number of worker threads in 
                                        txn_test_gen thread pool
  
  --txn-test-gen-account-prefix arg (=txn.test.)
                                        Prefix to use for accounts generated 
                                        and used by this plugin
```

### Application Config Options:

```
  --plugin arg                          Plugin(s) to enable, may be specified 
                                        multiple times
```

### Application Command Line Options:

```
  -h [ --help ]                         Print this help message and exit.
  
  -v [ --version ]                      Print version information.
  
  --full-version                        Print full version information.
  
  --print-default-config                Print default configuration template
  
  -d [ --data-dir ] arg                 Directory containing program runtime 
                                        data
  
  --config-dir arg                      Directory containing configuration 
                                        files such as config.ini
  
  -c [ --config ] arg (=config.ini)     Configuration file name relative to 
                                        config-dir
  
  -l [ --logconf ] arg (=logging.json)  Logging configuration file name/path 
                                        for library users
```
