<h3>Goldendog 1.6.19c</h3>

### Changelog

```
1.6.19-3: 
- added: goldendog-keyboard-service (fcitx5)
  This service provides easy configuration of keyboard layouts by region
- fixed: EULA service
  Once installed, after accepting the End User License Agreement, the service is automatically removed
```

```
1.6.19-2:
- Fixed Policy Kit Permissions for Helper agent
- Updated firefox ESR to latest version (to reduce updating time after installing iso)
- fixed gpg microsoft key location 
- updated: OpenSSL 
- updated: OpenSSH
- updated: gir1
- updated: Python 3.11
- updated: apache2-bin
- added: tree
- updated: wpasupplicant
- updated: libtommath1
1.6.19-1:
- Fixed: setuid for Policy Kit
- added: ntp
- updated: locales
- updated: libcurl4
- updated: libuno-cppu3
- updated: ghostscript
- updated: Exim4 (CVE-2024-39929)
- updated: Visual Studio Code
```

```
1.6.19:
- Removed rainbow bash prompt
  This occupied character space and made long lines look strange in the terminal. 
- Fixed home directory. Now Discover finds every directory in the home dir
- Added nano 8 Goldendog (run nano --version)
- Added syntax highlighting for nano 8 
- Added more wallpapers
- Fixed XDG paths
- Fixed polkit permissions
- Fixed root uid for sudo / pkexec / gpasswd 
- Fixed global permission enforcing
- added: Python 3
- added: mlocate
- fixed: dbus helper setuid
- fixed "About this system" (Now shows GoldenDog 1.6.19)
- fixed os-release
- fixed integrity check
```

```
1.6.18: 
- fixed lockscreen bug 
  Users were unable to unlock the machine even using the correct password. (bad permission on /sbin/unix_chkwd
- added: irssi (Terminal-based IRC Client)
- added: Konversation (Alexia's favourite IRC Client)
- added: VIM (Terminal-based text-editor/IDE)
- added: Midnight Commander (Terminal based Admin Console / file manager / editor)
- Added: integrity check post-apt update
- removed: unused old files from previous releases to reduce .iso space
- fixed: Integrity check post update 
- fixed: removing installer icon from desktop once installation has completed
```

```
1.6.17:
- added: Python 3
- added: mlocate
- fixed: dbus helper setuid
- fixed "About this system" (Now shows GoldenDog 1.6.19)
- fixed os-release
- fixed integrity check
```
