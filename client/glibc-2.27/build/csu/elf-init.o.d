$(common-objpfx)csu/elf-init.o: elf-init.c \
 ../include/stdc-predef.h \
 $(common-objpfx)libc-modules.h \
 ../include/libc-symbols.h \
 $(common-objpfx)config.h \
 ../sysdeps/generic/symbol-hacks.h \
 /usr/lib/gcc/x86_64-redhat-linux/7/include/stddef.h

../include/stdc-predef.h:

$(common-objpfx)libc-modules.h:

../include/libc-symbols.h:

$(common-objpfx)config.h:

../sysdeps/generic/symbol-hacks.h:

/usr/lib/gcc/x86_64-redhat-linux/7/include/stddef.h:
