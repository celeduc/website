section: Docs
pagename: install
pagetype: subdoc
title: Install IPFS | IPFS Docs
url: docs/install
save_as: docs/install/index.html

# Install Go IPFS

We recommend installing IPFS from a prebuilt package. You can obtain those from [dist.ipfs.io](https://dist.ipfs.io/#go-ipfs).

For convenience here are the latest versions linked directly

- <i class="fa fa-apple"></i> [Mac OS X 32bit](https://dist.ipfs.io/go-ipfs/v0.4.5/go-ipfs_v0.4.5_darwin-386.tar.gz)
- <i class="fa fa-apple"></i> [Mac OS X 64bit](https://dist.ipfs.io/go-ipfs/v0.4.5/go-ipfs_v0.4.5_darwin-amd64.tar.gz)
- <i class="fa fa-linux"></i> [Linux 32bit](https://dist.ipfs.io/go-ipfs/v0.4.5/go-ipfs_v0.4.5_linux-386.tar.gz)
- <i class="fa fa-linux"></i> [Linux 64bit](https://dist.ipfs.io/go-ipfs/v0.4.5/go-ipfs_v0.4.5_linux-amd64.tar.gz)
- <i class="fa fa-windows"></i> [Windows 32bit](https://dist.ipfs.io/go-ipfs/v0.4.5/go-ipfs_v0.4.5_windows-386.zip)
- <i class="fa fa-windows"></i> [Windows 64bit](https://dist.ipfs.io/go-ipfs/v0.4.5/go-ipfs_v0.4.5_windows-amd64.zip)
- <i class="fa fa-freebsd"></i> [FreeBSD 64bit](https://dist.ipfs.io/go-ipfs/v0.4.5/go-ipfs_v0.4.5_freebsd-amd64.tar.gz)



## Installing from a Prebuilt Package

### Mac OS X and Linux

After downloading, untar the archive, and move the `ipfs` binary somewhere in your executables `$PATH`:

```sh
tar xvfz go-ipfs.tar.gz
mv go-ipfs/ipfs /usr/local/bin/ipfs
```

Test it out:

```sh
> ipfs help
USAGE:

    ipfs - Global p2p merkle-dag filesystem.
...
```

Congratulations! You now have a working IPFS installation on your computer.

<a class="button button-primary" href="../getting-started" role="button">
  Getting Started with IPFS &nbsp;&nbsp;<i class="fa fa-arrow-right"></i>
</a>

### Windows

After downloading, unzip the archive, and move `ipfs.exe`  somewhere in your `%PATH%`.

Test it out:

```sh
> ipfs help
USAGE:

    ipfs - Global p2p merkle-dag filesystem.
...
```

Congratulations! You now have a working IPFS installation on your computer.

<a class="button button-primary" href="../getting-started" role="button">
  Getting Started with IPFS &nbsp;&nbsp;<i class="fa fa-arrow-right"></i>
</a>

---

## Building from Source

<div class="message mb">
  <strong>Warning:</strong> In the past you could install IPFS using <code>go get</code> this
  does not work anymore!
</div>

If you want, you can also build IPFS from source.
If you are on Mac OS X or Linux take a look at [the readme](https://github.com/ipfs/go-ipfs#build-from-source) for install instructions.
If you are on Windows take a look at [this document](https://github.com/ipfs/go-ipfs/blob/master/docs/windows.md) for instructions.

---

## Troubleshooting

### Help!

If you have any problems, come get live help at
[#ipfs](../#community) or via [the mailing list](../#community).

### Check Go Version

IPFS works with Go 1.7.0 or later.
To check what go version you have installed, type `go version`.
Here's what I get:

```sh
> go version
go version go1.7 linux/amd64
```

If you need to update, it is recommended to install from the
[canonical Go packages](https://golang.org/doc/install/).
Package managers often contain out-of-date Go packages.

### Install FUSE

For more details on setting up FUSE (so that you can mount the filesystem), see [github.com/ipfs/go-ipfs/blob/master/docs/fuse.md](https://github.com/ipfs/go-ipfs/blob/master/docs/fuse.md)
